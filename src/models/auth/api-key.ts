import {Model, Table, Column, PrimaryKey  } from 'sequelize-typescript'

interface APIKeyI {
    id?: number | null ;
    key: string;
    active: boolean,
    version: string
}

@Table ({
    tableName:'api-key',
    timestamps:true

})

export default class  APIKEY extends Model implements APIKeyI {
    @PrimaryKey
    @Column
    id?: number;

    @Column
    key!: string;

    @Column
    active ! : boolean

    @Column
    version !: string
}
 