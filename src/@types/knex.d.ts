/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Knex } from 'knex'

declare  module 'knex/types/tables'
    export interface Tables {
        user_diet: {
            id: string,
            first_name: string,
            last_name: string,
            email: string,
            created_at: string,
            updated_at: string,
            session_id?: string
        },
        
        record_meal: {
            id: string,
            user_id: string,
            title: string,
            description: string,
            is_on_diet: boolean,
            date: date,
            created_at: string,
            updated_at: string,
        }
    }