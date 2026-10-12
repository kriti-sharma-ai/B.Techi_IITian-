// Topics and repeated question types of each course's past papers, keyed by course slug.
// Read by lib/pyq-sheets.ts. A course missing here gets paper and year sheets only.

import type { PyqTopicTags } from "../../types";
import { advancedAlgorithmsTopics } from "./advanced-algorithms";
import { aiSearchMethodsForProblemSolvingTopics } from "./ai-search-methods-for-problem-solving";
import { algorithmicThinkingInBioinformaticsTopics } from "./algorithmic-thinking-in-bioinformatics";
import { algorithmsForDataScienceTopics } from "./algorithms-for-data-science";
import { businessAnalyticsTopics } from "./business-analytics";
import { businessDataManagementTopics } from "./business-data-management";
import { computerNetworksTopics } from "./computer-networks";
import { computerSystemDesignTopics } from "./computer-system-design";
import { corporateFinanceTopics } from "./corporate-finance";
import { databaseManagementSystemsTopics } from "./database-management-systems";
import { deepLearningTopics } from "./deep-learning";
import { deepLearningForComputerVisionTopics } from "./deep-learning-for-computer-vision";
import { deepLearningPracticeTopics } from "./deep-learning-practice";
import { designThinkingForDataDrivenAppDevelopmentTopics } from "./design-thinking-for-data-driven-app-development";
import { english1Topics } from "./english-1";
import { english2Topics } from "./english-2";
import { financialForensicsTopics } from "./financial-forensics";
import { gameTheoryAndStrategyTopics } from "./game-theory-and-strategy";
import { industry40Topics } from "./industry-4-0";
import { introductionToDeepLearningAndGenerativeAiTopics } from "./introduction-to-deep-learning-and-generative-ai";
import { introductionToNaturalLanguageProcessingTopics } from "./introduction-to-natural-language-processing";
import { largeLanguageModelsTopics } from "./large-language-models";
import { machineLearningFoundationsTopics } from "./machine-learning-foundations";
import { machineLearningPracticeTopics } from "./machine-learning-practice";
import { machineLearningTechniquesTopics } from "./machine-learning-techniques";
import { managerialEconomicsTopics } from "./managerial-economics";
import { marketResearchTopics } from "./market-research";
import { mathematicalFoundationsOfGenerativeAiTopics } from "./mathematical-foundations-of-generative-ai";
import { mathematicsForDataScience1Topics } from "./mathematics-for-data-science-1";
import { mathematicsForDataScience2Topics } from "./mathematics-for-data-science-2";
import { modernApplicationDevelopment1Topics } from "./modern-application-development-1";
import { modernApplicationDevelopment2Topics } from "./modern-application-development-2";
import { operatingSystemsTopics } from "./operating-systems";
import { programmingDataStructuresAndAlgorithmsTopics } from "./programming-data-structures-and-algorithms";
import { programmingInCTopics } from "./programming-in-c";
import { programmingInPythonTopics } from "./programming-in-python";
import { reinforcementLearningTopics } from "./reinforcement-learning";
import { softwareEngineeringTopics } from "./software-engineering";
import { softwareTestingTopics } from "./software-testing";
import { statisticsForDataScience1Topics } from "./statistics-for-data-science-1";
import { statisticsForDataScience2Topics } from "./statistics-for-data-science-2";
import { strategiesForProfessionalGrowthTopics } from "./strategies-for-professional-growth";
import { systemCommandsTopics } from "./system-commands";
import { toolsInDataScienceTopics } from "./tools-in-data-science";

export const PYQ_TOPIC_TAGS: Record<string, PyqTopicTags> = {
  "advanced-algorithms": advancedAlgorithmsTopics,
  "ai-search-methods-for-problem-solving": aiSearchMethodsForProblemSolvingTopics,
  "algorithmic-thinking-in-bioinformatics": algorithmicThinkingInBioinformaticsTopics,
  "algorithms-for-data-science": algorithmsForDataScienceTopics,
  "business-analytics": businessAnalyticsTopics,
  "business-data-management": businessDataManagementTopics,
  "computer-networks": computerNetworksTopics,
  "computer-system-design": computerSystemDesignTopics,
  "corporate-finance": corporateFinanceTopics,
  "database-management-systems": databaseManagementSystemsTopics,
  "deep-learning": deepLearningTopics,
  "deep-learning-for-computer-vision": deepLearningForComputerVisionTopics,
  "deep-learning-practice": deepLearningPracticeTopics,
  "design-thinking-for-data-driven-app-development": designThinkingForDataDrivenAppDevelopmentTopics,
  "english-1": english1Topics,
  "english-2": english2Topics,
  "financial-forensics": financialForensicsTopics,
  "game-theory-and-strategy": gameTheoryAndStrategyTopics,
  "industry-4-0": industry40Topics,
  "introduction-to-deep-learning-and-generative-ai": introductionToDeepLearningAndGenerativeAiTopics,
  "introduction-to-natural-language-processing": introductionToNaturalLanguageProcessingTopics,
  "large-language-models": largeLanguageModelsTopics,
  "machine-learning-foundations": machineLearningFoundationsTopics,
  "machine-learning-practice": machineLearningPracticeTopics,
  "machine-learning-techniques": machineLearningTechniquesTopics,
  "managerial-economics": managerialEconomicsTopics,
  "market-research": marketResearchTopics,
  "mathematical-foundations-of-generative-ai": mathematicalFoundationsOfGenerativeAiTopics,
  "mathematics-for-data-science-1": mathematicsForDataScience1Topics,
  "mathematics-for-data-science-2": mathematicsForDataScience2Topics,
  "modern-application-development-1": modernApplicationDevelopment1Topics,
  "modern-application-development-2": modernApplicationDevelopment2Topics,
  "operating-systems": operatingSystemsTopics,
  "programming-data-structures-and-algorithms": programmingDataStructuresAndAlgorithmsTopics,
  "programming-in-c": programmingInCTopics,
  "programming-in-python": programmingInPythonTopics,
  "reinforcement-learning": reinforcementLearningTopics,
  "software-engineering": softwareEngineeringTopics,
  "software-testing": softwareTestingTopics,
  "statistics-for-data-science-1": statisticsForDataScience1Topics,
  "statistics-for-data-science-2": statisticsForDataScience2Topics,
  "strategies-for-professional-growth": strategiesForProfessionalGrowthTopics,
  "system-commands": systemCommandsTopics,
  "tools-in-data-science": toolsInDataScienceTopics,
};
