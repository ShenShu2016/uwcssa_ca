/*
 * @Author: Shen Shu
 * @Date: 2022-06-16 21:53:41
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-19 23:28:52
 * @FilePath: /uwcssa_ca/src/components/DynamicForm/components/FormItemForm/FormInputFieldComponent.tsx
 * @Description:
 *
 */

import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import FieldLabel from '../FieldLabel';
import { FormItem } from 'redux/form/formSlice';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import React from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function FormInputFieldComponent({
  formik,
  formItem,
}: {
  formik: any;
  formItem: FormItem;
}) {
  function getInputLabelId(id: string) {
    return 'input-label-id' + id;
  }
  function getInputId(id: string) {
    return 'input-id-' + id;
  }

  if (formItem.formType === 'TextFieldShort') {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <TextField
          label={formItem.label}
          variant="outlined"
          name={`content${formItem.order}`}
          fullWidth
          value={formik.values[`content${formItem.order}`]}
          onChange={formik.handleChange}
          error={
            formik.touched[`content${formItem.order}`] &&
            Boolean(formik.errors[`content${formItem.order}`])
          }
          helperText={
            formik.touched[`content${formItem.order}`] &&
            formik.errors[`content${formItem.order}`]
          }
        />
      </>
    );
  } else if (formItem.formType === 'TextFieldLong') {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <TextField
          label={formItem.label}
          variant="outlined"
          name={`content${formItem.order}`}
          fullWidth
          multiline
          minRows={3}
          value={formik.values[`content${formItem.order}`]}
          onChange={formik.handleChange}
          error={
            formik.touched[`content${formItem.order}`] &&
            Boolean(formik.errors[`content${formItem.order}`])
          }
          helperText={
            formik.touched[`content${formItem.order}`] &&
            formik.errors[`content${formItem.order}`]
          }
        />
      </>
    );
  } else if (formItem.formType === 'Checkbox') {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <FormControlLabel
          name={`content${formItem.order}`}
          value={Boolean(formik.values[`content${formItem.order}`])}
          onChange={formik.handleChange}
          control={
            <Checkbox
              size="small"
              sx={{
                color:
                  formik.touched[`content${formItem.order}`] &&
                  Boolean(formik.errors[`content${formItem.order}`])
                    ? '#d32f2f'
                    : '',
              }}
            />
          }
          label={formItem.label}
        />
        <FormHelperText
          error={
            formik.touched[`content${formItem.order}`] &&
            Boolean(formik.errors[`content${formItem.order}`])
          }
        >
          {formik.touched[`content${formItem.order}`] &&
            formik.errors[`content${formItem.order}`]}
        </FormHelperText>
      </>
    );
  } else if (formItem.formType === 'Boolean') {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        {/* switch??????????????????????????? ????????????false ???????????? ?????????????????????required ??????????????? ???????????? */}
        {/* ???????????????????????????false??? ?????????????????????????????????false ????????????????????????required ???????????????????????? */}
        {/* <FormControlLabel
          name={`content${formItem.order}`}
          value={Boolean(formik.values[`content${formItem.order}`])}
          onChange={formik.handleChange}
          control={<Switch />}
          label={formItem.label}
        /> */}
        <FormControl
          error={
            formik.touched[`content${formItem.order}`] &&
            Boolean(formik.errors[`content${formItem.order}`])
          }
          variant="standard"
        >
          <RadioGroup
            row
            name={`content${formItem.order}`}
            value={formik.values[`content${formItem.order}`]}
            onChange={formik.handleChange}
          >
            {/* ????????? required={formItem.isRequired} */}
            <FormControlLabel
              value={true}
              control={
                <Radio
                  size="small"
                  sx={{
                    color:
                      formik.touched[`content${formItem.order}`] &&
                      Boolean(formik.errors[`content${formItem.order}`])
                        ? '#d32f2f'
                        : '',
                  }}
                />
              }
              label={'???'}
            />
            <FormControlLabel
              value={false}
              control={
                <Radio
                  size="small"
                  sx={{
                    color:
                      formik.touched[`content${formItem.order}`] &&
                      Boolean(formik.errors[`content${formItem.order}`])
                        ? '#d32f2f'
                        : '',
                  }}
                />
              }
              label={'???'}
            />
          </RadioGroup>
          <FormHelperText
            error={
              formik.touched[`content${formItem.order}`] &&
              Boolean(formik.errors[`content${formItem.order}`])
            }
          >
            {formik.touched[`content${formItem.order}`] &&
              formik.errors[`content${formItem.order}`]}
          </FormHelperText>
        </FormControl>
      </>
    );
  } else if (formItem.formType === 'MultipleSelect') {
    //???????????????switch
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <FormControl fullWidth>
          <InputLabel id={getInputLabelId(`content${formItem.order}`)}>
            {formItem.label}
          </InputLabel>
          <Select
            labelId={getInputLabelId(`content${formItem.order}`)}
            multiple
            id={getInputId(`content${formItem.order}`)}
            name={`content${formItem.order}`}
            value={formik.values[`content${formItem.order}`] || []} //???????????????????????????????????????????????????????????????
            label={formItem.label}
            onChange={formik.handleChange}
            error={
              formik.touched[`content${formItem.order}`] &&
              Boolean(formik.errors[`content${formItem.order}`])
            }
            input={
              <OutlinedInput
                id={getInputId(`content${formItem.order}`)}
                label="Chip"
              />
            }
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {formItem.formSelectChoices.map((option, index) => {
              return (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </>
    );
  } else if (formItem.formType === 'Select') {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <FormControl fullWidth>
          <InputLabel id={getInputLabelId(`content${formItem.order}`)}>
            {formItem.label}
          </InputLabel>
          <Select
            labelId={getInputLabelId(`content${formItem.order}`)}
            id={`content${formItem.order}`}
            name={`content${formItem.order}`}
            value={formik.values[`content${formItem.order}`]}
            label={formItem.label}
            onChange={formik.handleChange}
            error={
              formik.touched[`content${formItem.order}`] &&
              Boolean(formik.errors[`content${formItem.order}`])
            }
          >
            {formItem.formSelectChoices.map((option, index) => {
              return (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>
            {formik.touched[`content${formItem.order}`] &&
              formik.errors[`content${formItem.order}`]}
          </FormHelperText>
        </FormControl>
      </>
    );
  } else if (formItem.formType === 'FileUpload') {
    return null;
  } else if (
    formItem.formType === 'RadioGroupH' ||
    formItem.formType === 'RadioGroupV'
  ) {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <FormControl
          error={
            formik.touched[`content${formItem.order}`] &&
            Boolean(formik.errors[`content${formItem.order}`])
          }
        >
          {/* <FormLabel id={getInputLabelId(`content${formItem.order}`)}>
            {formItem.label}
          </FormLabel> */}
          <RadioGroup
            row={formItem.formType === 'RadioGroupH'}
            aria-labelledby={getInputLabelId(`content${formItem.order}`)}
            name={`content${formItem.order}`}
            onChange={formik.handleChange}
            value={formik.values[`content${formItem.order}`]}
          >
            {formItem.formSelectChoices.map((option, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color:
                          formik.touched[`content${formItem.order}`] &&
                          Boolean(formik.errors[`content${formItem.order}`])
                            ? '#d32f2f'
                            : '',
                      }}
                    />
                  }
                  label={option}
                />
              );
            })}
          </RadioGroup>
          <FormHelperText
            error={
              formik.touched[`content${formItem.order}`] &&
              Boolean(formik.errors[`content${formItem.order}`])
            }
          >
            {formik.touched[`content${formItem.order}`] &&
              formik.errors[`content${formItem.order}`]}
          </FormHelperText>
        </FormControl>
      </>
    );
  } else if (formItem.formType === 'DatePicker') {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label={formItem.label}
            inputFormat="MM/dd/yyyy"
            value={formik.values[`content${formItem.order}`] || null}
            onChange={(value) => {
              formik.setFieldValue(`content${formItem.order}`, value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={
                  formik.touched[`content${formItem.order}`] &&
                  Boolean(formik.errors[`content${formItem.order}`])
                }
                helperText={
                  formik.touched[`content${formItem.order}`] &&
                  formik.errors[`content${formItem.order}`]
                }
              />
            )}
          />
        </LocalizationProvider>
      </>
    );
  } else if (formItem.formType === 'DateTimePicker') {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label={formItem.label}
            value={formik.values[`content${formItem.order}`] || null}
            onChange={(value) => {
              formik.setFieldValue(`content${formItem.order}`, value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={
                  formik.touched[`content${formItem.order}`] &&
                  Boolean(formik.errors[`content${formItem.order}`])
                }
                helperText={
                  formik.touched[`content${formItem.order}`] &&
                  formik.errors[`content${formItem.order}`]
                }
              />
            )}
          />
        </LocalizationProvider>
      </>
    );
  } else if (formItem.formType === 'TimePicker') {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label={formItem.label}
            value={formik.values[`content${formItem.order}`] || null}
            onChange={(value) => {
              formik.setFieldValue(`content${formItem.order}`, value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={
                  formik.touched[`content${formItem.order}`] &&
                  Boolean(formik.errors[`content${formItem.order}`])
                }
                helperText={
                  formik.touched[`content${formItem.order}`] &&
                  formik.errors[`content${formItem.order}`]
                }
              />
            )}
          />
        </LocalizationProvider>
      </>
    );
  } else {
    console.error(`Unknown form type: ${formItem.formType}`);
  }
}

export default FormInputFieldComponent;
