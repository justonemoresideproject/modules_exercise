import React from "react";

const choice = (items) => {
    return items[Math.floor(Math.random() * items.length)]
}

const remove = (items, item) => {
    if(!items.includes(item)){
        return undefined
    }

    return items.splice(items.indexOf(item) + 1)
}

export default {choice, remove}