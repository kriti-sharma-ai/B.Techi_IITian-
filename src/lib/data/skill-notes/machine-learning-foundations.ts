import type { SkillNotes } from "../../types";

// Text lessons for "Machine Learning Foundations with scikit-learn".

export const mlNotes: SkillNotes = {
  skill: "machine-learning-foundations",
  quickLabel: "Code",
  lessons: [
    {
      lecture: "What ML is (and isn't)",
      blocks: [
        {
          kind: "points",
          items: [
            "Machine learning finds a function from **examples**: given inputs (features) and known answers (labels), it learns a rule that predicts the answer for new inputs.",
            "Use ML when the rule is too complex to write by hand but you have plenty of labelled history: churn, fraud, demand, credit risk, spam.",
            "Don't use ML when a simple rule or SQL query answers the question, when you have a few hundred rows, or when nobody will act on the prediction.",
          ],
        },
        {
          kind: "table",
          head: ["Type", "Learns from", "Business example"],
          rows: [
            ["Regression", "Labelled numbers", "Next month's demand per store"],
            ["Classification", "Labelled categories", "Will this customer churn (yes/no)?"],
            ["Clustering", "No labels", "Customer segments for marketing"],
            ["Recommendation", "Interactions", "\"Customers also bought\""],
            ["Generative models", "Huge unlabelled corpora", "Drafting text, summarising tickets"],
          ],
        },
        {
          kind: "tip",
          text: "Frame every project as: **\"Predict ___ for each ___, so that ___ can ___.\"** e.g. \"Predict churn risk for each subscriber, so that the retention team can call the top 500 each week.\" If you can't fill the last blank, stop.",
        },
        {
          kind: "traps",
          items: ["A model with 95% accuracy on a problem where 95% of cases are \"no\" may have learned nothing. Always compare with a dumb baseline."],
        },
      ],
    },
    {
      lecture: "Train, validate, test",
      blocks: [
        {
          kind: "table",
          head: ["Split", "Typical share", "Used for"],
          rows: [
            ["Training", "60–80%", "Fitting model parameters"],
            ["Validation", "10–20% (or cross-validation)", "Choosing models and hyperparameters"],
            ["Test", "10–20%", "One final, honest estimate. Touch it once."],
          ],
        },
        {
          kind: "code",
          code: `from sklearn.model_selection import train_test_split

X = df.drop(columns=["churned"])
y = df["churned"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)`,
          note: "`stratify=y` keeps the same class balance in both splits, which matters for rare outcomes.",
        },
        {
          kind: "table",
          title: "Reading the gap",
          head: ["Train score", "Validation score", "Diagnosis", "Try"],
          rows: [
            ["Low", "Low", "Underfitting", "More features, more flexible model"],
            ["High", "Much lower", "Overfitting", "Simpler model, regularisation, more data"],
            ["High", "Close to train", "Good fit", "Check the test set once, then ship"],
          ],
        },
        {
          kind: "traps",
          items: [
            "For time-ordered data (sales, churn by month), split **by time**: train on the past, test on the future. A random split leaks the future into training.",
            "If you tune against the test set, it's a validation set and you no longer have an honest estimate.",
          ],
        },
      ],
    },
    {
      lecture: "Linear and logistic regression",
      blocks: [
        {
          kind: "code",
          code: `from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

reg = make_pipeline(StandardScaler(), LinearRegression()).fit(X_train, y_train)
reg.predict(X_test)

clf = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000)).fit(X_train, y_train)
clf.predict_proba(X_test)[:, 1]     # probability of class 1`,
        },
        {
          kind: "formulas",
          items: [
            { label: "Linear", f: "ŷ = w_{0} + w_{1}x_{1} + … + w_{k}x_{k}" },
            { label: "Logistic", f: "P(y = 1) = [[1 // 1 + e^{−(w_{0} + w·x)}]]", note: "The sigmoid squashes any score into a probability between 0 and 1." },
            { label: "Odds ratio", f: "e^{w_{j}}", note: "Multiplicative change in the odds for +1 unit of x_{j}." },
          ],
        },
        {
          kind: "points",
          items: [
            "Start every project with these. They're fast, explainable, and a strong baseline that fancier models must beat.",
            "Scale features (`StandardScaler`) before regularised linear models so the penalty treats them fairly.",
            "Regularisation: **Ridge** (L2) shrinks all weights; **Lasso** (L1) pushes some to exactly zero, which doubles as feature selection.",
          ],
        },
        {
          kind: "traps",
          items: ["Logistic regression outputs probabilities. The 0.5 cut-off is a default, not a law: choose the threshold from business costs (next lessons)."],
        },
      ],
    },
    {
      lecture: "Decision trees and forests",
      blocks: [
        {
          kind: "points",
          items: [
            "A **decision tree** asks yes/no questions (\"tenure < 6 months?\") to split data into purer groups. Easy to explain, but a deep tree memorises noise.",
            "A **random forest** trains hundreds of trees on random samples of rows and features, then averages them. Much more accurate and stable.",
            "**Gradient boosting** (XGBoost, LightGBM, scikit-learn's `HistGradientBoostingClassifier`) adds trees one at a time, each fixing the previous errors. Usually the strongest choice for tabular business data.",
          ],
        },
        {
          kind: "code",
          code: `from sklearn.ensemble import RandomForestClassifier, HistGradientBoostingClassifier

rf = RandomForestClassifier(n_estimators=300, min_samples_leaf=5, n_jobs=-1, random_state=42)
rf.fit(X_train, y_train)

gb = HistGradientBoostingClassifier(max_iter=300, learning_rate=0.05, random_state=42)
gb.fit(X_train, y_train)

# Which features matter? Permutation importance is more honest than .feature_importances_
from sklearn.inspection import permutation_importance
imp = permutation_importance(gb, X_test, y_test, n_repeats=10, random_state=42)`,
        },
        {
          kind: "table",
          head: ["Hyperparameter", "Higher value means"],
          rows: [
            ["`max_depth`", "More complex trees, more overfitting risk"],
            ["`min_samples_leaf`", "Smoother, more general trees"],
            ["`n_estimators` (forest)", "More stable, slower; rarely hurts"],
            ["`learning_rate` (boosting)", "Faster learning, more overfitting; pair low rates with more iterations"],
          ],
        },
        {
          kind: "traps",
          items: ["Tree-based models don't need feature scaling, but they can't extrapolate: a forest never predicts a value above the highest it saw in training."],
        },
      ],
    },
    {
      lecture: "Metrics that matter",
      blocks: [
        {
          kind: "table",
          title: "Confusion matrix",
          head: ["", "Predicted yes", "Predicted no"],
          rows: [
            ["Actually yes", "True positive (TP)", "False negative (FN)"],
            ["Actually no", "False positive (FP)", "True negative (TN)"],
          ],
        },
        {
          kind: "formulas",
          items: [
            { label: "Accuracy", f: "[[TP + TN // all]]", note: "Misleading for rare events." },
            { label: "Precision", f: "[[TP // TP + FP]]", note: "Of those flagged, how many were right? Matters when acting is costly." },
            { label: "Recall", f: "[[TP // TP + FN]]", note: "Of the real cases, how many did we catch? Matters when missing is costly." },
            { label: "F1", f: "2 · [[precision · recall // precision + recall]]" },
            { label: "ROC-AUC", f: "probability a random positive is scored above a random negative", note: "0.5 = coin toss, 1.0 = perfect ranking." },
            { label: "MAE", f: "average |y − ŷ|", note: "In the target's units: \"off by 12 units on average\"." },
            { label: "RMSE", f: "√{mean (y − ŷ)^{2}}", note: "Punishes big errors more than MAE." },
            { label: "MAPE", f: "mean [[|y − ŷ| // |y|]]", note: "Breaks when actuals are near zero." },
          ],
        },
        {
          kind: "example",
          q: "A churn model flags 200 customers; 120 actually churn. Overall, 300 customers churned. Precision and recall?",
          steps: ["TP = 120, FP = 80, FN = 300 − 120 = 180.", "Precision = 120 / 200 = 0.60.", "Recall = 120 / 300 = 0.40."],
          answer: "Precision 60%, recall 40%",
        },
        {
          kind: "tip",
          text: "Pick the threshold with money: if a retention call costs ₹50 and a saved customer is worth ₹2,000, flagging is worth it when P(churn) × save rate × 2,000 > 50.",
        },
      ],
    },
    {
      lecture: "Feature engineering",
      blocks: [
        {
          kind: "table",
          head: ["Raw data", "Useful features"],
          rows: [
            ["Signup date", "Tenure in days, signup month, cohort"],
            ["Transactions", "Recency, frequency, monetary value (RFM), trend over last 3 months"],
            ["Timestamps", "Hour, weekday, weekend flag, days since last event"],
            ["Category with many levels", "Top-N + \"Other\", or target encoding (fit inside CV)"],
            ["Two amounts", "Ratios: spend per visit, discount share"],
            ["Text (support tickets)", "Length, keyword flags, sentiment, embeddings"],
          ],
        },
        {
          kind: "code",
          code: `from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline

num = ["tenure_days", "monthly_spend", "tickets_90d"]
cat = ["plan", "city_tier", "payment_method"]

prep = ColumnTransformer([
    ("num", Pipeline([("impute", SimpleImputer(strategy="median")), ("scale", StandardScaler())]), num),
    ("cat", OneHotEncoder(handle_unknown="ignore", min_frequency=20), cat),
])
model = Pipeline([("prep", prep), ("clf", LogisticRegression(max_iter=1000))])
model.fit(X_train, y_train)`,
          note: "Put every transformation inside the pipeline so it's learned from training data only.",
        },
        {
          kind: "tip",
          text: "Domain features usually beat model tuning. One conversation with the support team (\"customers who call twice in a week usually leave\") can be worth more than a week of hyperparameter search.",
        },
      ],
    },
    {
      lecture: "Cross-validation",
      blocks: [
        {
          kind: "points",
          items: [
            "**k-fold cross-validation** splits the training data into k parts, trains on k − 1 and validates on the remaining one, k times. The average score is far more reliable than one split.",
            "Use `StratifiedKFold` for classification, `TimeSeriesSplit` for time-ordered data, `GroupKFold` when the same customer or store appears in many rows.",
          ],
        },
        {
          kind: "code",
          code: `from sklearn.model_selection import cross_val_score, StratifiedKFold, GridSearchCV

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X_train, y_train, cv=cv, scoring="roc_auc")
print(scores.mean(), scores.std())

grid = GridSearchCV(
    model,
    {"clf__C": [0.01, 0.1, 1, 10]},     # step name + "__" + parameter
    cv=cv, scoring="roc_auc",
)
grid.fit(X_train, y_train)
grid.best_params_, grid.best_score_`,
        },
        {
          kind: "traps",
          items: [
            "Scaling or imputing **before** splitting leaks information across folds. Keep preprocessing inside the pipeline.",
            "Look at the standard deviation across folds. A mean of 0.80 ± 0.10 is much less certain than 0.80 ± 0.01.",
          ],
        },
      ],
    },
    {
      lecture: "Leakage case studies",
      blocks: [
        {
          kind: "points",
          items: [
            "**Data leakage** is when training data contains information that won't be available at prediction time. The model looks brilliant in testing and fails in production.",
          ],
        },
        {
          kind: "table",
          head: ["Case", "The leak", "Fix"],
          rows: [
            ["Churn model with 0.99 AUC", "Feature `cancellation_reason` is only filled after a customer churns", "Use only data known before the prediction date"],
            ["Loan default model", "`days_past_due` is measured after the loan was issued", "Build features as of the application date"],
            ["Hospital readmission", "Patient ID numbering encodes the admitting ward", "Drop identifiers; check top features for nonsense"],
            ["Sales forecast", "Random split lets the model see next week's sales of the same store", "Time-based split"],
            ["Any model", "Scaler fit on all data before splitting", "Fit preprocessing inside the pipeline"],
          ],
        },
        {
          kind: "tip",
          text: "If a model is suspiciously good, list its top 5 features and ask, for each: \"Would I know this value at the moment I need the prediction?\"",
        },
      ],
    },
    {
      lecture: "Churn prediction project",
      blocks: [
        {
          kind: "points",
          title: "Brief",
          items: [
            "Use a public telecom or subscription churn dataset (the IBM Telco Customer Churn data on Kaggle is a good start).",
            "Goal: rank customers by churn risk so a retention team with capacity for the top 10% can act.",
            "Deliverables: a notebook with EDA, a baseline, two models in pipelines with cross-validation, a chosen threshold, and a one-page summary for the retention manager.",
          ],
        },
        {
          kind: "table",
          title: "Milestones",
          head: ["Step", "Done when"],
          rows: [
            ["Baseline", "Majority-class and logistic regression scores recorded"],
            ["Features", "At least 5 engineered features, each with a one-line reason"],
            ["Models", "Logistic regression and gradient boosting compared with 5-fold CV ROC-AUC"],
            ["Threshold", "Precision and recall in the top 10% reported, with the business trade-off explained"],
            ["Explain", "Top drivers from permutation importance, in plain language"],
            ["Test", "Final model scored once on the held-out test set"],
          ],
        },
        {
          kind: "tip",
          text: "Report **lift**: \"customers in our top decile churn at 3.1× the average rate\". Managers understand lift instantly; AUC needs a lecture.",
        },
      ],
    },
  ],
  recap: [
    "Frame the problem as a decision someone will make; no action, no model.",
    "Always beat a simple baseline before reaching for complex models.",
    "Split by time when the data has time in it, and keep the test set for one final check.",
    "Put every preprocessing step inside a scikit-learn Pipeline to avoid leakage.",
    "Choose metrics and thresholds from business costs, not defaults.",
    "If results look too good, hunt for leakage before celebrating.",
  ],
};
