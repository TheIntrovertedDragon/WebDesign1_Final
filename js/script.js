document.getElementById('directions1').addEventListener('click', async () => {
  const listItems=document.querySelectorAll('#directions1');

  const formattedText = Array.from(listItems)
    .map((items,index) => `${index+1}. ${items.innerText.trim()}`)
    .join('\n')

  try {
    await navigator.clipboard.writeText(formattedText);
    alert('Directions copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
})