const tm = 'hello word'
function fn(value) {
  /**
   * 第1步, 先切割字符串
   * 观察发现 可以通过 空格 来切割成数组最方便
   * 期待结果 ['hello', 'word']
   */
  const arr = value.split(' ')
  console.log('arr', arr)
  /**
   * 第2步, 拿到切割好的字符串, 切割字符串的第一个字符 转换成大写, 然后拼接剩下的字符
   * 期待结果 'H' + 'ello' , 'W' + 'ord'
   */
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
  }
  console.log('arr', arr)
  /**
   * 第3步 , 把数组转成字符串, 通过 空格 切割
   * 期待结果 得到 ['Hello', 'Word'] 转为 Hello Word
   */
  console.log('arr.join', arr.join(' '))
  return arr.join(' ')
}
// 期待结果 Hello Word
fn(tm)
