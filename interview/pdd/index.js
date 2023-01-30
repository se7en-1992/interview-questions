const richText = {
  content: '你是一名优秀的前端开发工程师',
  description: [
    {
      start: 0,
      length: 1,
      type: 'bold',
    },
    {
      start: 7,
      length: 7,
      type: 'underline',
    },
    {
      start: 9,
      length: 2,
      type: 'bold',
    },
  ],
};

const formatFun = (richText) => {
  const result = [];
  const content = richText.content || '';
  const description = richText.description || [];
  let index = 0; // 用来控制记录当前索引走到哪里

  description.forEach(item => {
    index = item.start + item.length;
    const subStrText = content.subString(item.start, index);

    const children = {type: item.type, children: subStrText};

    

  });


  return result;
};



formatFun(richText);