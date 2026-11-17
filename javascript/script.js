async function copy(listID) {
  const list = document.getElementById(listID);
  const items = Array.from(list.querySelectorAll('li'))

  const formattedText=items
    .map((item,index) => `${index+1}.${item.innerText.trim()}`)
    .join('\n');

  try {
    await navigator.clipboard.writeText(formattedText);
    alert('Directions copied to clipboard');
  } catch (err) {
    console.error('Failed to copy list:', err);
  }
}