import { model, Schema } from 'mongoose'


export let ExampleSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  created: {
    type: Schema.Types.String,
    default: Date.now(),
  },
})

export const Example = model(
  'Example',
  ExampleSchema,
)
