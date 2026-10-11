# Section name in the IITM paper -> (slug prefix, full course name, short label, level, group)
SUBJECTS = {
    "Sem1 Maths1": ("maths-1", "mathematics-for-data-science-1", "Mathematics for Data Science I", "Maths I", "foundation"),
    "Sem1 Statistics1": ("stats-1", "statistics-for-data-science-1", "Statistics for Data Science I", "Stats I", "foundation"),
    "Sem1 CT": ("ct", "computational-thinking", "Computational Thinking", "CT", "foundation"),
    "Sem1 English1": ("english-1", "english-1", "English I", "English I", "foundation"),
    "Sem2 Maths2": ("maths-2", "mathematics-for-data-science-2", "Mathematics for Data Science II", "Maths II", "foundation"),
    "Sem2 Statistics2": ("stats-2", "statistics-for-data-science-2", "Statistics for Data Science II", "Stats II", "foundation"),
    "Sem2 Intro to Python": ("python", "programming-in-python", "Programming in Python", "Python", "foundation"),
    "Sem2 English2": ("english-2", "english-2", "English II", "English II", "foundation"),
    "DBMS": ("dbms", "database-management-systems", "Database Management Systems", "DBMS", "diploma-programming"),
    "PDSA": ("pdsa", "programming-data-structures-and-algorithms", "Programming, Data Structures and Algorithms using Python", "PDSA", "diploma-programming"),
    "Appdev1": ("mad-1", "modern-application-development-1", "Modern Application Development I", "MAD I", "diploma-programming"),
    "Java": ("java", "programming-concepts-using-java", "Programming Concepts using Java", "Java", "diploma-programming"),
    "System commands": ("system-commands", "system-commands", "System Commands", "System Commands", "diploma-programming"),
    "Appdev2": ("mad-2", "modern-application-development-2", "Modern Application Development II", "MAD II", "diploma-programming"),
    "MLF": ("mlf", "machine-learning-foundations", "Machine Learning Foundations", "MLF", "diploma-data-science"),
    "MLT": ("mlt", "machine-learning-techniques", "Machine Learning Techniques", "MLT", "diploma-data-science"),
    "MLP": ("mlp", "machine-learning-practice", "Machine Learning Practice", "MLP", "diploma-data-science"),
    "BDM": ("bdm", "business-data-management", "Business Data Management", "BDM", "diploma-data-science"),
    "Business Analytics": ("ba", "business-analytics", "Business Analytics", "BA", "diploma-data-science"),
    "TDS": ("tds", "tools-in-data-science", "Tools in Data Science", "TDS", "diploma-data-science"),
    "Sw Testing": ("software-testing", "software-testing", "Software Testing", "Software Testing", "degree"),
    "Deep Learning": ("deep-learning", "deep-learning", "Deep Learning", "Deep Learning", "degree"),
    "DLP": ("dlp", "deep-learning-practice", "Deep Learning Practice", "DLP", "degree"),
    "i-NLP": ("inlp", "introduction-to-natural-language-processing", "Introduction to Natural Language Processing", "i-NLP", "degree"),
    "SPG": ("spg", "strategies-for-professional-growth", "Strategies for Professional Growth", "SPG", "degree"),
    # Degree courses from the Aug 2025 Degree and Improvement papers. Prefixes and course slugs match
    # scripts/quiz-pyqs/subjects.py; Managerial Economics uses BTechi's own course slug (curriculum.ts).
    "Sw Engg": ("software-engineering", "software-engineering", "Software Engineering", "Software Engineering", "degree"),
    "AI": ("ai-search", "ai-search-methods-for-problem-solving", "AI: Search Methods for Problem Solving", "AI Search", "degree"),
    "Programming in C": ("c-programming", "programming-in-c", "Programming in C", "C Programming", "degree"),
    "Computer System Design": ("csd", "computer-system-design", "Computer System Design", "CSD", "degree"),
    "LLM": ("llm", "large-language-models", "Large Language Models", "LLM", "degree"),
    "DL(CV)": ("dl-cv", "deep-learning-for-computer-vision", "Deep Learning for Computer Vision", "DL for CV", "degree"),
    "Mathematical Foundations of Generative AI": ("mfgai", "mathematical-foundations-of-generative-ai", "Mathematical Foundations of Generative AI", "Maths for GenAI", "degree"),
    "ADS": ("ads", "algorithms-for-data-science", "Algorithms for Data Science", "ADS", "degree"),
    "Advanced Algorithms": ("advanced-algorithms", "advanced-algorithms", "Advanced Algorithms", "Advanced Algorithms", "degree"),
    "Algorithmic Thinking in Bio": ("atb", "algorithmic-thinking-in-bioinformatics", "Algorithmic Thinking in Bioinformatics", "ATB", "degree"),
    "Game Theory and Strategy": ("game-theory", "game-theory-and-strategy", "Game Theory and Strategy", "Game Theory", "degree"),
    "Managerial Economics": ("managerial-economics", "managerial-economics", "Managerial Economics", "Managerial Economics", "degree"),
    "Market Research": ("market-research", "market-research", "Market Research", "Market Research", "degree"),
    "Design Thinking": ("design-thinking", "design-thinking-for-data-driven-app-development", "Design Thinking for Data-Driven App Development", "Design Thinking", "degree"),
}

# Improvement papers drop the "SemN" from Foundation section names; the questions are the same.
ALIASES = {
    "Maths1": "Sem1 Maths1", "Statistics1": "Sem1 Statistics1", "CT": "Sem1 CT", "English1": "Sem1 English1",
    "Maths2": "Sem2 Maths2", "Statistics2": "Sem2 Statistics2", "Intro to Python": "Sem2 Intro to Python", "English2": "Sem2 English2",
}

# Pen-and-paper exams (Statistical Computing, Speech Technology): the questions are scanned images
# answered on paper, with no key, so they can't be sat in the exam portal and are left out.


def canonical(section):
    return ALIASES.get(section, section)


def slug_for(section, sitting):
    s = SUBJECTS.get(canonical(section))
    if not s:
        return None
    return f"{s[0]}-end-term-{sitting}"
