import React, { useState } from 'react';
import Select from 'react-select';
import { Checkbox } from './checkbox';
import './style.css';

const options = [
  { value: 'produto 01', label: 'Produto 01' },
  { value: 'produto 02', label: 'Produto 02' },
  { value: 'produto 03', label: 'Produto 03' },
  { value: 'produto 04', label: 'Produto 04' },
  { value: 'produto 05', label: 'Produto 05' },
  { value: 'produto 06', label: 'Produto 06' },
  { value: 'produto 07', label: 'Produto 07' },
  { value: 'produto 08', label: 'Produto 08' },
]

export const MultiSelect = () => {

  const [isMulti, setIsMulti] = useState(true);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <>
      <h1 className='typography-h1'>React Select Testes</h1>
      <div className='container'>
        <Select
          className='select'
          options={options}
          placeholder='Selecione a opção...'
          name='color'
          classNamePrefix='select'

          isMulti={isMulti}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
        />
      </div>
      <div className='container checkboxes'>
        <Checkbox
          checked={isMulti}
          onChange={() => setIsMulti((state) => !state)}
        >
          Multiseleção
        </Checkbox>
        <Checkbox
          checked={isClearable}
          onChange={() => setIsClearable((state) => !state)}
        >
          Opção de limpeza total
        </Checkbox>
        <Checkbox
          checked={isSearchable}
          onChange={() => setIsSearchable((state) => !state)}
        >
          Buscador
        </Checkbox>
        <Checkbox
          checked={isDisabled}
          onChange={() => setIsDisabled((state) => !state)}
        >
          Desabilitado
        </Checkbox>
        <Checkbox
          checked={isLoading}
          onChange={() => setIsLoading((state) => !state)}
        >
          Carregavel
        </Checkbox>
        <Checkbox
          checked={isRtl}
          onChange={() => setIsRtl((state) => !state)}>
          Inverso
        </Checkbox>
      </div>
    </>
  )
}
