
export function validateMessage(raw){
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
    let text = message.trim().toLowerCase()
    if (text === "salut" || text === "bonjour"){
        return "Hello there!"
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