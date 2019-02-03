const currentYear = new Date().getFullYear();

export const validator = (text: string, type: string, from: string) => {
  if (text !== '') {
    let Text = text.split();
    Text = Text.map(letter => letter.replace(/[^0-9]+/g, ''));
    Text = Text.join();
    if (type === 'day' && Number(Text) <= 31 && Number(Text[0]) + Number(Text[1]) !== 0) {
      return Text;
    }
    if (type === 'month' && Number(Text) <= 12 && Number(Text[0]) + Number(Text[1]) !== 0) {
      return Text;
    }
    if (type === 'year') {
      if (from === 'birth' && Number(Text) <= currentYear) {
        return Text;
      }
      if (from === 'doc' && Number(Text) > currentYear) {
        return Text;
      }
      return Text.substr(0, Text.length - 1);
    }
    return Text.substr(0, Text.length - 1);
  }
  return text;
};
