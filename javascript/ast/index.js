var answer = 6 * 7;

// 词法分析 （lexical analyzer）
// 词法分析器也叫scanner（扫描器），顾名思义就是扫描我们的代码，遍历每个字符，使用预先定义好的规则将每个字符转换成token(词法单元)。

[
  {
      "type": "Keyword",
      "value": "var"
  },
  {
      "type": "Identifier",
      "value": "answer"
  },
  {
      "type": "Punctuator",
      "value": "="
  },
  {
      "type": "Numeric",
      "value": "6"
  },
  {
      "type": "Punctuator",
      "value": "*"
  },
  {
      "type": "Numeric",
      "value": "7"
  },
  {
      "type": "Punctuator",
      "value": ";"
  }
]

// 语法分析 （Syntax analyzer）
// 语法分析就是将遍历得到的token列表，
// 根据语法规则将token关联起来，形成一棵树形结构，这棵树就是AST。
// 所以AST表示的是源代码的语法结构，树上的每个节点表示的是源代码中的一种结构。

{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "answer"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "*",
            "left": {
              "type": "Literal",
              "value": 6,
              "raw": "6"
            },
            "right": {
              "type": "Literal",
              "value": 7,
              "raw": "7"
            }
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
}

