# Merge Branches
Merge branches in your CI.

## Usage

```yaml
on:
  push:
    branches:
      - "release/*"
jobs:
  merge-branch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Merge main -> develop
        uses: safinazawad/merge-branches@1.0.0
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          source_branch: 'main'
          target_branch: 'develop'
          commit_message: 'Merged branch source into target'
```

