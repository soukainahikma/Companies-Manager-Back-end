import {v4 as uuid} from "uuid"
export let companies = []

export let users = [
    {
        id: uuid(),
        name: 'admin',
        email: 'admin@admin.com',
        password: 'admin',
        role: 'admin'
    }
]