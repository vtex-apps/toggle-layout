# Toggle Layout

A layout that renders it's content, on demand, controlled via site editor

⚠️ This app works not as visibility, but as displaying it's content passed

![Site editor example](../../../img/toggleLayout.png)

## Configuration

1. Add `toggle-layout` block and declare it's content via the children prop

```json
"toggle-layout": {
    "children": [
      "rich-text#title",
      "info-card#example"
      ]
  }
```

Now the user has access to a `Toggle Layout` block inside site editor, that can manipulate on demand
