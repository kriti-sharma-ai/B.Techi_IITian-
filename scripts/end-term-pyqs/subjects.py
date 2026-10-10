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
}


def slug_for(section, sitting):
    s = SUBJECTS.get(section)
    if not s:
        return None
    return f"{s[0]}-end-term-{sitting}"
