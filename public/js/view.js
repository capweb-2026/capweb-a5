export function renderMessages(messages, container) {
  const lignes = [];
 
  messages.forEach((message) => {
    const li = document.createElement('li');

    if (message.role === 'user') {
      li.textContent = 'Vous : ' + message.text;
    } else {
      li.textContent = 'Cap Web : ' + message.text;
    }

    lignes.push(li);
  });
  
  container.replaceChildren(...lignes);
}