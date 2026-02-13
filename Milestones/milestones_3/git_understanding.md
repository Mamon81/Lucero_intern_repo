Jianna Monique M. Lucero

Git concept: staging vs committing

1. What is the difference between staging and committing?

Staging moves the changes to the index/staging area, marking them for being included into the next commit, while committing saves the changes that are in the staging area permanently to the Git repository. Staging also allows me to be able to pick changes to include, supporting granular control and smaller, focused commits while committing creates a permanent snapshot of the project's current state. In summary, staging is important when separating unrelated changes, while committing is the final step to adding those changes into the project's history.

2. Why does Git separate these two steps?

Git separates staging and committing in order to give developers granular control over their project's history. This allows them to be able to select and group together related changes into clean commits rather than combining all changes into one, messy update. By using the staging area, I can be able to review my "draft changes", and fix small typos to my code before it becomes a permanent part of my repository. This can ensure that each commit represents a single, clean and complete change, making it easier for the rest of my team to understand and revert the change if necessary.

3. When would you want to stage changes without committing?

Staging changes without committing is useful for being able to prepare clean and focused commits, to better manage work in progress and effectively separate unrelated changes or modifications. Staging serves as a temporary holding space, allowing me to be able to hand-pick specific files or changes that belong to a single, finished task. By grouping similar changes/files into clean commits, I can also be able to keep temporary files/changes out of the shared repository before committing. In conclusion, staging changes before committing can transform my messy working directory into a more organize one, making it easier for the rest of my team to be able to track the progress of the project, understand how it's slowly evolving, and be able to undo any specific changes in case something goes wrong.