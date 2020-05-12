interface Action<T> {
    payload?: T;
    type: string;
}

class EffectModule {
    count = 1;
    message = "hello!";

    delay(input: Promise<number>) {
        return input.then(i => ({
            payload: `hello ${i}!`,
            type: 'delay'
        }));
    }

    setMessage(action: Action<Date>) {
        return {
            payload: action.payload!.getMilliseconds(),
            type: "set-message"
        };
    }
}

type getFuncNameFrom<T> = {
    [P in keyof T]: T[P] extends Function ? P : never
}[keyof T]

type EffectModuleFuncNames = getFuncNameFrom<EffectModule>

type resolveEffectModuleFunc<F> =
    F extends (input: Promise<infer T>) => Promise<Action<infer U>>
    ? (input: T) => Action<U>
    : F extends (action: Action<infer T>) => Action<infer U>
    ? (action: T) => Action<U>
    : never

type Connect = (module: EffectModule) => {
    [T in EffectModuleFuncNames]: resolveEffectModuleFunc<EffectModule[T]>
}

const connectFunc: Connect = (module: EffectModule) => {
    return {
        delay: (input: number) => {
            return { payload: input.toString(), type: "async" }
        },
        setMessage: (action: Date) => {
            return { payload: action.getDate(), type: "sync" }
        }
    }
}