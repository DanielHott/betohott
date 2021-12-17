export default function pegaUrlYt(url) {
    const NUMBER_ELEVEN = 11;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return (match && match[2].length === NUMBER_ELEVEN)
      ? match[2]
      : null;
  }
