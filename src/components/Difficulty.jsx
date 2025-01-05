import React, { useState } from "react";
const Difficulty = () => {
    const hard = [
        { frontend_question_id: 3123, accuracy: "45.9%", question_title: "Find Edges in Shortest Paths", question__title_slug: "find-edges-in-shortest-paths", difficulty: 3, related_topics: ["Graph", "DP","DSU"] },
        { frontend_question_id: 3108, accuracy: "45.1%", question_title: "Minimum Cost Walk in Weighted Graph", question__title_slug: "minimum-cost-walk-in-weighted-graph", difficulty: 3, related_topics: ["Graph", "Greedy","DSU"] },
        { frontend_question_id: 2968, accuracy: "37.1%", question_title: "Apply Operations to Maximize Frequency Score", question__title_slug: "apply-operations-to-maximize-frequency-score", difficulty: 3, related_topics: ["Array", "Greedy","DP","Maths"] },
        { frontend_question_id: 2867, accuracy: "35.1%", question_title: "Count Valid Paths in a Tree", question__title_slug: "count-valid-paths-in-a-tree", difficulty: 3, related_topics: ["Tree", "DFS","DP"] },
        { frontend_question_id: 2872, accuracy: "56.3%", question_title: "Maximum Number of K-Divisible Components", question__title_slug: "maximum-number-of-k-divisible-components", difficulty: 3, related_topics: ["Graph","DP","BFS"] },
        { frontend_question_id: 2846, accuracy: "44.1%", question_title: "Minimum Edge Weight Equilibrium Queries in a Tree", question__title_slug: "minimum-edge-weight-equilibrium-queries-in-a-tree", difficulty: 3, related_topics: ["Tree", "Binary Search","DSU"] },
        { frontend_question_id: 1998, accuracy: "46.2%", question_title: "GCD Sort of an Array", question__title_slug: "gcd-sort-of-an-array", difficulty: 3, related_topics: ["Array", "Sorting","DSU"] },
        { frontend_question_id: 1994, accuracy: "35.4%", question_title: "The Number of Good Subsets", question__title_slug: "the-number-of-good-subsets", difficulty: 3, related_topics: ["DP", "Bitmask","Number Theory"] },
        { frontend_question_id: 1483, accuracy: "35.2%", question_title: "Kth Ancestor of a Tree Node", question__title_slug: "kth-ancestor-of-a-tree-node", difficulty: 3, related_topics: ["Tree", "DFS"] },
        { frontend_question_id: 956, accuracy: "52.1%", question_title: "Tallest Billboard", question__title_slug: "tallest-billboard", difficulty: 3, related_topics: ["DP"] },
        { frontend_question_id: 854, accuracy: "40.1%", question_title: "K-Similar Strings", question__title_slug: "k-similar-strings", difficulty: 3, related_topics: ["String", "BFS"] },
        { frontend_question_id: 546, accuracy: "48.1%", question_title: "Remove Boxes", question__title_slug: "remove-boxes", difficulty: 3, related_topics: ["DP"] },
        { frontend_question_id: 115, accuracy: "48.8%", question_title: "Distinct Subsequences", question__title_slug: "distinct-subsequences", difficulty: 3, related_topics: ["DP"] },
        { frontend_question_id: 1994, accuracy: "35.4%", question_title: "The Number of Good Subsets", question__title_slug: "the-number-of-good-subsets", difficulty: 3, related_topics: ["DP", "Bitmask","Number Theory"] },
        { frontend_question_id: 1483, accuracy: "35.2%", question_title: "Kth Ancestor of a Tree Node", question__title_slug: "kth-ancestor-of-a-tree-node", difficulty: 3, related_topics: ["Tree", "DFS"] },
        { frontend_question_id: 956, accuracy: "52.1%", question_title: "Tallest Billboard", question__title_slug: "tallest-billboard", difficulty: 3, related_topics: ["DP"] },
        { frontend_question_id: 854, accuracy: "40.1%", question_title: "K-Similar Strings", question__title_slug: "k-similar-strings", difficulty: 3, related_topics: ["String", "BFS"] },
        { frontend_question_id: 546, accuracy: "48.1%", question_title: "Remove Boxes", question__title_slug: "remove-boxes", difficulty: 3, related_topics: ["DP"] },
        { frontend_question_id: 115, accuracy: "48.8%", question_title: "Distinct Subsequences", question__title_slug: "distinct-subsequences", difficulty: 3, related_topics: ["DP"] },
      ];
    
      const medium = [
        { frontend_question_id: 1177, accuracy: "39.7%", question_title: "Can Make Palindrome from Substring", question__title_slug: "can-make-palindrome-from-substring", difficulty: 2, related_topics: ["String", "Greedy"] },
        { frontend_question_id: 947, accuracy: "62.1%", question_title: "Most Stones Removed with Same Row or Column", question__title_slug: "most-stones-removed-with-same-row-or-column", difficulty: 2, related_topics: ["Greedy", "DSU"] },
        { frontend_question_id: 2812, accuracy: "48.6%", question_title: "Find the Safest Path in a Grid", question__title_slug: "find-the-safest-path-in-a-grid", difficulty: 2, related_topics: ["Graph", "DFS"] },
        { frontend_question_id: 2919, accuracy: "34.1%", question_title: "Minimum Increment Operations to Make Array Beautiful", question__title_slug: "minimum-increment-operations-to-make-array-beautiful", difficulty: 2, related_topics: ["Array", "Greedy"] },
        { frontend_question_id: 3335, accuracy: "26.3%", question_title: "Total Characters in String After Transformations I", question__title_slug: "total-characters-in-string-after-transformations-i", difficulty: 2, related_topics: ["String", "DP"] },
        { frontend_question_id: 3035, accuracy: "42.5%", question_title: "Maximum Palindromes After Operations", question__title_slug: "maximum-palindromes-after-operations", difficulty: 2, related_topics: ["String", "Greedy"] },
        { frontend_question_id: 2845, accuracy: "35.4%", question_title: "Count of Interesting Subarrays", question__title_slug: "count-of-interesting-subarrays", difficulty: 2, related_topics: ["Array", "Window"] },
        { frontend_question_id: 1754, accuracy: "49.8%", question_title: "Largest Merge Of Two Strings", question__title_slug: "largest-merge-of-two-strings", difficulty: 2, related_topics: ["String", "Greedy", "Stack"] },
        { frontend_question_id: 2063, accuracy: "54.2%", question_title: "Vowels of All Substrings", question__title_slug: "vowels-of-all-substrings", difficulty: 2, related_topics: ["String", "Maths","Stack"] },
        { frontend_question_id: 2501, accuracy: "53.1%", question_title: "Longest Square Streak in an Array", question__title_slug: "longest-square-streak-in-an-array", difficulty: 2, related_topics: ["Array", "Math","DP"] },
        { frontend_question_id: 2611, accuracy: "46.5%", question_title: "Mice and Cheese", question__title_slug: "mice-and-cheese", difficulty: 2, related_topics: ["Greedy"] },
        { frontend_question_id: 1129, accuracy: "47.1%", question_title: "Shortest Path with Alternating Colors", question__title_slug: "shortest-path-with-alternating-colors", difficulty: 2, related_topics: ["Graph", "BFS"] },
        { frontend_question_id: 2845, accuracy: "35.4%", question_title: "Count of Interesting Subarrays", question__title_slug: "count-of-interesting-subarrays", difficulty: 2, related_topics: ["Array", "Window"] },
        { frontend_question_id: 1754, accuracy: "49.8%", question_title: "Largest Merge Of Two Strings", question__title_slug: "largest-merge-of-two-strings", difficulty: 2, related_topics: ["String", "Greedy", "Stack"] },
        { frontend_question_id: 2063, accuracy: "54.2%", question_title: "Vowels of All Substrings", question__title_slug: "vowels-of-all-substrings", difficulty: 2, related_topics: ["String", "Maths","Stack"] },
        { frontend_question_id: 2501, accuracy: "53.1%", question_title: "Longest Square Streak in an Array", question__title_slug: "longest-square-streak-in-an-array", difficulty: 2, related_topics: ["Array", "Math","DP"] },
        { frontend_question_id: 2611, accuracy: "46.5%", question_title: "Mice and Cheese", question__title_slug: "mice-and-cheese", difficulty: 2, related_topics: ["Greedy"] },
        { frontend_question_id: 1129, accuracy: "47.1%", question_title: "Shortest Path with Alternating Colors", question__title_slug: "shortest-path-with-alternating-colors", difficulty: 2, related_topics: ["Graph", "BFS"] },
      ];

  const all = [...hard, ...medium]; 
  const [question, setQuestion] = useState("");
  const [diff, setDiff] = useState(0);

  const DifficultyQuestion = (category) => {
    let questionsToUse = [];
    if (category === "hard") {
      setDiff(0);
      questionsToUse = hard;
    } else if (category === "medium") {
      setDiff(0);
      questionsToUse = medium;
    } else if (category === "random") {
      setDiff(1);
      questionsToUse = all;
    }

    const randomIndex = Math.floor(Math.random() * questionsToUse.length);
    setQuestion(questionsToUse[randomIndex]);
  };

  return (
    <div className="text-center font-sans">
      <div className="text-2xl py-4">Generate a Random Leetcode Question</div>
      <div className="mb-5 flex justify-center gap-3">
        <button
          onClick={() => DifficultyQuestion("hard")}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-800 transition transform hover:scale-105"
        >
          Hard
        </button>
        <button
          onClick={() => DifficultyQuestion("medium")}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-800 transition transform hover:scale-105"
        >
          Medium
        </button>
        <button
          onClick={() => DifficultyQuestion("random")}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-800 transition transform hover:scale-105"
        >
          Random
        </button>
      </div>
      <div className="flex  justify-center items-center gap-7 mt-10">
        {question ? (
            <>
           <div className="bg-slate-300 ">
            <h3 className="text-xl font-semibold mx-10 mt-10">{question.question_title}</h3>
            {diff === 1 && question.difficulty === 3 && (
              <button className="mt-2 bg-red-500 text-white px-6 py-2 rounded-full">Hard</button>
            )}
            {diff === 1 && question.difficulty === 2 && (
              <button className="mt-2 bg-green-500 text-white px-6 py-2 rounded-full">Medium</button>
            )}
            <div className="flex items-center justify-center gap-5 mt-3">
              <a
                href={`https://leetcode.com/problems/${question.question__title_slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Leetcode {question.frontend_question_id}
              </a>
              <p className="text-black">Accuracy: {question.accuracy}</p>
            </div>
            <div className="mt-4 mb-4 flex flex-wrap justify-center gap-2">
              {question.related_topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-gray-200 border border-gray-400 rounded px-3 py-1 text-center"
                >
                  {topic}
                </div>
              ))}
            </div>
           </div>
















           </>
        ) : (
          <h3 className="text-lg">Select a category to generate a question</h3>
        )}
      </div>
    </div>
  );
};

export default Difficulty;
