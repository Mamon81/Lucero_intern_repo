Jianna Monique M. Lucero

Git concept: staging vs committing

1. What is the difference between staging and committing?

Staging moves the changes to the index/staging area, marking them for being included into the next commit, while committing saves the changes that are in the staging area permanently to the Git repository. Staging also allows me to be able to pick changes to include, supporting granular control and smaller, focused commits while committing creates a permanent snapshot of the project's current state. In summary, staging is important when separating unrelated changes, while committing is the final step to adding those changes into the project's history.

2. Why does Git separate these two steps?

Git separates staging and committing in order to give developers granular control over their project's history. This allows them to be able to select and group together related changes into clean commits rather than combining all changes into one, messy update. By using the staging area, I can be able to review my "draft changes", and fix small typos to my code before it becomes a permanent part of my repository. This can ensure that each commit represents a single, clean and complete change, making it easier for the rest of my team to understand and revert the change if necessary.

3. When would you want to stage changes without committing?

Staging changes without committing is useful for being able to prepare clean and focused commits, to better manage work in progress and effectively separate unrelated changes or modifications. Staging serves as a temporary holding space, allowing me to be able to hand-pick specific files or changes that belong to a single, finished task. By grouping similar changes/files into clean commits, I can also be able to keep temporary files/changes out of the shared repository before committing. In conclusion, staging changes before committing can transform my messy working directory into a more organize one, making it easier for the rest of my team to be able to track the progress of the project, understand how it's slowly evolving, and be able to undo any specific changes in case something goes wrong.

Branching & Team Collaboration

1. Why is pushing directly to main problematic?

Pushing directly to main is problematic because it can compromise the stability of the project's most critical and production-ready environment. By using the main branch as a place for modifying your project can result in an increased risk to introducing unfinished or broken code into a live application. Furthermore, this method also bypasses proper review of the modified code by your other team mates as well as skipping the testing phases, resulting in errors popping up during the final product. Furthermore, pushing directly to main also compromises team collaboration, since there is an increased chance where developers may accidentally overwrite each other's work or encounter complex problems that are difficult to resolve on a shared branch. In conclusion, pushing directly to main makes it not only difficult for the project's history to track but also limits the team's ability to be able to safely undo specific mistakes without disrupting the entire live working project.

2. How do branches help with reviewing code?

Branches help with reviewing the code as it can provide a dedicated and isolated area wherein changes for a specific task can be closely inspected while the stable part of the project in the main branch is not affected. Since a specific branch is mainly focused on a single feature or fix, this gives reviewers and testers the opportunity to provide a more detailed feedback on a code that is easily manageable compared to being overwhelmed by unecessary or unrelated changes. In summary, by making branches, this ensures that only high-quality and tested changes are merged in to main codebase, making the entire development process of a project more organized and reliable.

3. What happens if two people edit the same file on different branches?

If two people edit the same file on different branches, Git often handles it automatically depending on the changes being applied to the same file. If the edits are in separate lines of the file, Git will simply merge both sets of edits into a single version with no issues present. However, if both individuals modify the exact same line, Git will stop the merge, causing a merge conflict. If this happens, the person who is responsible for merging should manually review the code, decide which changes to keep, and remove the conflict markers before the final version is committed to the repository.