export default {
    type: 'object',
    required: ['first_name', 'mass', 'hair_color', 'eye_color'],
    $schema: 'http://json-schema.org/draft-04/schema',
    properties: {
        first_name: { type: 'string' },
        mass: { type: 'string' },
        hair_color: { type: 'string' },
        eye_color: { type: 'string' },
        skin_color: { type: 'string' },
        height: { type: 'string' },
        gender: { type: 'string' },
        birth_year: { type: 'string' },
        created: { type: 'string' },
        edited: { type: 'string' }
    }
} as const;