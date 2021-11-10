interface BaseEvent{
    time: number,
    user: string,
};

interface EventMap{
    addToCart: BaseEvent & {quantity: number, productId: string};
    checkout: BaseEvent;
};

function sendEvent<Name extends keyof EventMap>(name: Name ,data: EventMap[Name]): void{
  console.log(name, data);
}

sendEvent("addToCart", {time: 123, user:"foo", quantity: 1, productId: "1"});
sendEvent("checkout", {time: 123, user:"foo"});
