export interface People {
    id?: { S: string },
    first_name?: { S: string },
    mass?: { S: string },
    hair_color?: { S: string },
    eye_color?: { S: string },
    skin_color?: { S: string },
    height?: { S: string },
    gender?: { S: string },
    birth_year?: { S: string },
    created?: { S: string },
    edited?: { S: string }
}

export interface TestPeople {
    id?: string,
    first_name?: string,
    mass?: string,
    hair_color?: string,
    eye_color?: string,
    skin_color?: string,
    height?: string,
    gender?: string,
    birth_year?: string,
    created?: string,
    edited?: string
}