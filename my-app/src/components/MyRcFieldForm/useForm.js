import React, {useRef} from "react";

class FormStore {
    constructor() {
        this.store = {};
        this.errors = {};
        this.fieldEntities = {};
        this.callbacks = {};
    }

    setError(name, error) {
        this.errors[name] = error;
    }

    setCallbacks(callbacks) {
        this.callbacks = {
            ...this.callbacks,
            ...callbacks
        }
    }

    setFieldValue(key, value) {
        this.store[key] = value;
        this.fieldEntities[key].onStoreChange();
    }

    setFieldsValue(store) {
        this.store = {
            ...this.store,
            ...store
        };

        Object.keys(store).forEach((name) => {
            this.fieldEntities[name].onStoreChange();
        })
    }

    setFieldEntities(name, instance) {
        this.fieldEntities[name] = instance;
        return () => {
            delete this.fieldEntities[name];
            delete this.store[name];
        }
    }

    getFieldValue(key) {
        return this.store[key];
    }

    getFieldsValue() {
        return {...this.store};
    }

    getErrors() {
        return {...this.errors};
    }

    submit() {
        const err = this.validateAll();
        const {onFinish, onFinishFailed} = this.callbacks;
        if (err.length) {
            onFinishFailed(err, this.getFieldsValue());
        } else {
            onFinish(this.getFieldsValue());
        }
        Object.keys(this.store).forEach((name) => {
            this.fieldEntities[name].onStoreChange();
        })
    }

    validateAll() {
        this.errors = {};
        const store = this.getFieldsValue();
        Object.keys(this.fieldEntities).forEach((key) => {
            this.validate(key, store[key], this.fieldEntities[key].props.rules);
        })
        return [...Object.values(this.errors)];
    }

    validate(key, value, rules = []) {
        rules.forEach((rule) => {
            if (rule.validator) {
                rule.validator(rule, value, (err) => {
                    if (err) {
                        this.setError(key,{
                            name: key,
                            value: value,
                            message: err
                        });
                    }
                });
                return;
            }
            if (rule.required) {
                if (!value) {
                    this.setError(key,{
                        name: key,
                        value: value,
                        message: rule.message
                    });
                }
            }
        })
        this.fieldEntities[key].onStoreChange();
    }

    getForm() {
        return {
            getFieldValue: this.getFieldValue.bind(this),
            getFieldsValue: this.getFieldsValue.bind(this),
            setFieldValue: this.setFieldValue.bind(this),
            setFieldsValue: this.setFieldsValue.bind(this),
            setCallbacks: this.setCallbacks.bind(this),
            setFieldEntities: this.setFieldEntities.bind(this),
            getErrors: this.getErrors.bind(this),
            validateAll: this.validateAll.bind(this),
            validate: this.validate.bind(this),
            submit: this.submit.bind(this)
        }
    }
}

export default function useForm(form) {
    const formRef = useRef(null);
    if (!formRef.current) {
        const formStore = new FormStore();
        formRef.current = form || formStore.getForm();
    }
    return [formRef.current];
}
