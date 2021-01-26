import { Button, Section, TextArea, Field, Selection } from 'wmarks-components'
import { BoxText, FieldWrapper, SelectiondWrapper } from './style'

const optionsPk = ['true', 'false']
const optionsType = ['string', 'int']

function TextBox({
  form,
  saveOnClick,
  savAllOnClick,
  includeOnClinck,
  value,
  readOnly
}) {
  return (
    <BoxText
      backgroundColor="colorThird"
      borderColor="colorFirst"
      shadowColor="colorSecond"
      form={form}
    >
      <Section backgroundColor="colorThird" borderColor="colorSecond">
        <Button
          small
          borderRadius
          backgroundColor="colorSecond"
          onClick={saveOnClick}
        >
          Save
        </Button>
        <Button
          small
          borderRadius
          backgroundColor="colorSecond"
          onClick={savAllOnClick}
        >
          Save All
        </Button>
      </Section>
      {form && (
        <Section backgroundColor="colorThird" borderColor="colorSecond">
          <FieldWrapper>
            <Field label="Name:" vertical />
            <Field label="Description:" vertical />
          </FieldWrapper>
          <SelectiondWrapper>
            <Selection label="PK:" values={optionsPk} vertical />
            <Selection label="Type:" values={optionsType} vertical />
          </SelectiondWrapper>
          <Button small borderRadius onClick={includeOnClinck}>
            Add
          </Button>
        </Section>
      )}
      {readOnly ? (
        <TextArea value={value} />
      ) : (
        <TextArea defaultValue={value} />
      )}
    </BoxText>
  )
}

export default TextBox
