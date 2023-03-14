import styled from "styled-components"
import { Column, Div, Row, Section, Range } from "../../common/styleDiv"
import { attributeCode, attributeCodes, vTypes } from "./codes"
import { useCallback } from "react"
import { SelectSet } from "~/component"
import React from "react"

export const FeatureEffect = () => {
  return (
    <Section paddingBottom={100}>
      <Column padding={6} gap={20}>
        {attributeCodes.map((useAttr, idx) => {
          return <Parameters key={idx} useAttr={useAttr} />
        })}
      </Column>
    </Section>
  )
}

const Parameters = ({ useAttr }: { useAttr: attributeCode }) => {
  const {
    misc: { title, sample },
    state: [param, setParam],
    jsx,
    vType,
    numberRange = [0, 1],
    rangeSteps = 0.1,
    selectOptions = [],
  } = useAttr()

  const handleChangeText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value
      setParam(value)
    },
    []
  )

  const handleChangeRange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.currentTarget.value)
      setParam(value)
    },
    []
  )

  const handleChangeSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.currentTarget.value
      setParam(value)
    },
    []
  )

  return (
    <Column gap={6} shadow={10} padding={10}>
      <Title>{title}</Title>
      <Row padding={0}>
        {vType === vTypes.text && (
          <>
            <Input width={200} onChange={handleChangeText} value={param} />
            <Sample>{sample}</Sample>
          </>
        )}
        {vType === vTypes.range && (
          <>
            <Range
              width={200}
              onChange={handleChangeRange}
              value={param as number}
              range={numberRange}
              step={rangeSteps}
            />
            <Sample>{sample}</Sample>
          </>
        )}
        {vType === vTypes.select && (
          <SelectSet
            width={200}
            fontSize={20}
            onChange={handleChangeSelect}
            options={selectOptions.map((item) => ({
              title: item,
              value: item,
            }))}
          />
        )}
      </Row>
      <Div border="#eee" padding={0} marginTop={10}>
        {jsx}
      </Div>
    </Column>
  )
}

//----------------------------------------
// Styled
//----------------------------------------
const Title = styled.div`
  font-size: 20px;
  color: var(--main-color);
  :before {
    content: "■";
    margin-right: 5px;
    color: var(--main-color);
  }
`
const Sample = styled.div`
  font-size: 1rem;
  font-size: 1.2rem;
  color: grey;
`
const Input = styled.input.attrs({ type: "text" })`
  width: 160px;
  height: 36px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: center;
  ::placeholder {
    color: grey;
  }
`
