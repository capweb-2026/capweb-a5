
function validerMessageStrict(raw){
    if (typeof raw !== "string"){
        return {ok: false, error: "le message n'est pas une chaîne"}
    }
    else if (raw.trim() === ""){
        return {ok: false, error: "le message est vide"}
    }
    else if (raw.trim().length > 280){
        return {ok: false, error: "le message est trop long"}
    }
    else{
        return {ok: true, value: raw.trim()}
    }
}

export function replyTo(message){
    const text = message.trim().toLowerCase()
    if (text === "salut" || text === "bonjour"){
        return "salut"
    }
    else if (text === "aide"){
        return "Comment puis-je vous aider?"
    }
    else if (text === "test"){
        return "test test"
    }
    else {
        return "Désolé, je n'ai pas compris"
    }
}

// Tolérance : un message à peine trop long (jusqu'à 300 caractères) reste accepté.
export function validateMessage(raw) {
  const resultat = validerMessageStrict(raw);
  if (resultat.ok || typeof raw !== 'string') {
    return resultat;
  }
  const value = raw.trim();
  if (value !== '' && value.length <= 300) {
    return { ok: true, value };
  }
  return resultat;
}
