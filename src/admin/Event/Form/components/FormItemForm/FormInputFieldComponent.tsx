/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: Shen Shu
 * @Date: 2022-06-03 16:35:33
 * @LastEditors: 李佳修
 * @LastEditTime: 2022-06-09 11:41:18
 * @FilePath: /uwcssa_ca/src/admin/Event/Form/components/FormItemForm/FormInputFieldComponent.tsx
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
  // FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  // Switch,
  TextField,
} from "@mui/material";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { FormItem } from "redux/form/formSlice";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import React from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import FieldLabel from "../../../EventCreate/components/FieldLabel";

function FormInputFieldComponent({
  formik,
  formItem,
}: {
  formik: any;
  formItem: FormItem;
}) {
  function getInputLabelId(id: string) {
    return `input-label-id${id}`;
  }
  function getInputId(id: string) {
    return `input-id-${id}`;
  }

  if (formItem.formType === "TextFieldShort") {
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
          name={formItem.id}
          fullWidth
          value={formik.values[formItem.id]}
          onChange={formik.handleChange}
          error={
            formik.touched[formItem.id] && Boolean(formik.errors[formItem.id])
          }
          helperText={formik.touched[formItem.id] && formik.errors[formItem.id]}
        />
      </>
    );
  }
  if (formItem.formType === "TextFieldLong") {
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
          name={formItem.id}
          fullWidth
          multiline
          minRows={3}
          value={formik.values[formItem.id]}
          onChange={formik.handleChange}
          error={
            formik.touched[formItem.id] && Boolean(formik.errors[formItem.id])
          }
          helperText={formik.touched[formItem.id] && formik.errors[formItem.id]}
        />
      </>
    );
  }
  if (formItem.formType === "Checkbox") {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <FormControlLabel
          name={formItem.id}
          value={Boolean(formik.values[formItem.id])}
          onChange={formik.handleChange}
          control={
            <Checkbox
              size="small"
              sx={{
                color:
                  formik.touched[formItem.id] &&
                  Boolean(formik.errors[formItem.id])
                    ? "#d32f2f"
                    : "",
              }}
            />
          }
          label={formItem.label}
        />
        <FormHelperText
          error={
            formik.touched[formItem.id] && Boolean(formik.errors[formItem.id])
          }
        >
          {formik.touched[formItem.id] && formik.errors[formItem.id]}
        </FormHelperText>
      </>
    );
  }
  if (formItem.formType === "Boolean") {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        {/* switch的初始状态有点问题 赋默认值false 赋不进去 如果这个字段是required 校验不通过 有点问题 */}
        {/* 而且就算赋默认值是false了 这相当于是强制用户选了false 如果这个字段不是required 是应该允许空值的 */}
        {/* <FormControlLabel
          name={formItem.id}
          value={Boolean(formik.values[formItem.id])}
          onChange={formik.handleChange}
          control={<Switch />}
          label={formItem.label}
        /> */}
        <FormControl
          error={
            formik.touched[formItem.id] && Boolean(formik.errors[formItem.id])
          }
          variant="standard"
        >
          <RadioGroup
            row
            name={formItem.id}
            value={formik.values[formItem.id]}
            onChange={formik.handleChange}
          >
            {/* 可以写 required={formItem.isRequired} */}
            <FormControlLabel
              value="T"
              control={
                <Radio
                  size="small"
                  sx={{
                    color:
                      formik.touched[formItem.id] &&
                      Boolean(formik.errors[formItem.id])
                        ? "#d32f2f"
                        : "",
                  }}
                />
              }
              label="是"
            />
            <FormControlLabel
              value="F"
              control={
                <Radio
                  size="small"
                  sx={{
                    color:
                      formik.touched[formItem.id] &&
                      Boolean(formik.errors[formItem.id])
                        ? "#d32f2f"
                        : "",
                  }}
                />
              }
              label="否"
            />
          </RadioGroup>
          <FormHelperText
            error={
              formik.touched[formItem.id] && Boolean(formik.errors[formItem.id])
            }
          >
            {formik.touched[formItem.id] && formik.errors[formItem.id]}
          </FormHelperText>
        </FormControl>
      </>
    );
  }
  if (formItem.formType === "MultipleSelect") {
    // 之后这里放switch
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <FormControl fullWidth>
          <InputLabel id={getInputLabelId(formItem.id)}>
            {formItem.label}
          </InputLabel>
          <Select
            labelId={getInputLabelId(formItem.id)}
            multiple
            id={getInputId(formItem.id)}
            name={formItem.id}
            value={formik.values[formItem.id] || []} // ！！太重要了这个是为了防止没有值的时候报错
            label={formItem.label}
            onChange={formik.handleChange}
            error={
              formik.touched[formItem.id] && Boolean(formik.errors[formItem.id])
            }
            input={<OutlinedInput id={getInputId(formItem.id)} label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {formItem.formSelectChoices.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    );
  }
  if (formItem.formType === "Select") {
    return (
      <>
        <FieldLabel
          name={formItem.question}
          isRequired={formItem.isRequired}
          description={formItem.description}
        />
        <FormControl fullWidth>
          <InputLabel id={getInputLabelId(formItem.id)}>
            {formItem.label}
          </InputLabel>
          <Select
            labelId={getInputLabelId(formItem.id)}
            id={formItem.id}
            name={formItem.id}
            value={formik.values[formItem.id]}
            label={formItem.label}
            onChange={formik.handleChange}
            error={
              formik.touched[formItem.id] && Boolean(formik.errors[formItem.id])
            }
          >
            {formItem.formSelectChoices.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched[formItem.id] && formik.errors[formItem.id]}
          </FormHelperText>
        </FormControl>
      </>
    );
  }
  if (formItem.formType === "FileUpload") {
    return null;
  }
  if (
    formItem.formType === "RadioGroupH" ||
    formItem.formType === "RadioGroupV"
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
            formik.touched[formItem.id] && Boolean(formik.errors[formItem.id])
          }
        >
          {/* <FormLabel id={getInputLabelId(formItem.id)}>
            {formItem.label}
          </FormLabel> */}
          <RadioGroup
            row={formItem.formType === "RadioGroupH"}
            aria-labelledby={getInputLabelId(formItem.id)}
            name={formItem.id}
            onChange={formik.handleChange}
            value={formik.values[formItem.id]}
          >
            {formItem.formSelectChoices.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={
                  <Radio
                    size="small"
                    sx={{
                      color:
                        formik.touched[formItem.id] &&
                        Boolean(formik.errors[formItem.id])
                          ? "#d32f2f"
                          : "",
                    }}
                  />
                }
                label={option}
              />
            ))}
          </RadioGroup>
          <FormHelperText
            error={
              formik.touched[formItem.id] && Boolean(formik.errors[formItem.id])
            }
          >
            {formik.touched[formItem.id] && formik.errors[formItem.id]}
          </FormHelperText>
        </FormControl>
      </>
    );
  }
  if (formItem.formType === "DatePicker") {
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
            value={formik.values[formItem.id] || null}
            onChange={(value) => {
              formik.setFieldValue(formItem.id, value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={
                  formik.touched[formItem.id] &&
                  Boolean(formik.errors[formItem.id])
                }
                helperText={
                  formik.touched[formItem.id] && formik.errors[formItem.id]
                }
              />
            )}
          />
        </LocalizationProvider>
      </>
    );
  }
  if (formItem.formType === "DateTimePicker") {
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
            value={formik.values[formItem.id] || null}
            onChange={(value) => {
              formik.setFieldValue(formItem.id, value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={
                  formik.touched[formItem.id] &&
                  Boolean(formik.errors[formItem.id])
                }
                helperText={
                  formik.touched[formItem.id] && formik.errors[formItem.id]
                }
              />
            )}
          />
        </LocalizationProvider>
      </>
    );
  }
  if (formItem.formType === "TimePicker") {
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
            value={formik.values[formItem.id] || null}
            onChange={(value) => {
              formik.setFieldValue(formItem.id, value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={
                  formik.touched[formItem.id] &&
                  Boolean(formik.errors[formItem.id])
                }
                helperText={
                  formik.touched[formItem.id] && formik.errors[formItem.id]
                }
              />
            )}
          />
        </LocalizationProvider>
      </>
    );
  }
  console.error(`Unknown form type: ${formItem.formType}`);
}

export default FormInputFieldComponent;
