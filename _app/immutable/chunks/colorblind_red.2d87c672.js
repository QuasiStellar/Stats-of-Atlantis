const A="data:image/png;base64,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";export{A as default};