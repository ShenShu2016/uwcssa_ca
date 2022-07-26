/*
 * @Author: Shen Shu
 * @Date: 2022-06-02 17:10:21
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-26 16:12:16
 * @FilePath: /uwcssa_ca/src/redux/form/formSlice.tsx
 * @Description:
 *
 */

import {
  CreateFormInput,
  CreateFormItemInput,
  UpdateFormInput,
  UpdateFormItemInput,
} from "API";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createForm,
  createFormItem,
  updateForm,
  updateFormItem,
} from "graphql/mutations";
import { getForm, getFormItem, listForms } from "graphql/queries";

import API from "@aws-amplify/api";
import { RootState } from "redux/store";
import { UserProfile } from "redux/userProfile/userProfileSlice";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { v4 as uuid } from "uuid";
import { listFormItems } from "./custom_q_m_s";

export type Form = {
  id: string;
  formItems?: Array<FormItem> | null;
  createdAt: string;
  updatedAt: string;
  owner: string;
  user?: UserProfile | null;
};

export type FormItem = {
  id?: string | null;
  question: string;
  order: number;
  isRequired: boolean;
  isString: boolean;
  isEmail: boolean;
  isNumber: boolean;
  description?: string | null;
  formType: FormType;
  helperText?: string | null;
  minLength?: number | null;
  maxLength?: number | null;
  placeholder?: string | null;
  label?: string | null;
  formSelectChoices?: Array<string | null> | null;
  isExample?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  owner: string;
  formFormItemsId?: string | null;
};

export enum FormType {
  TextFieldShort = "TextFieldShort",
  TextFieldLong = "TextFieldLong",
  Checkbox = "Checkbox",
  Select = "Select",
  Boolean = "Boolean",
  MultipleSelect = "MultipleSelect",
  FileUpload = "FileUpload",
  RadioGroupH = "RadioGroupH",
  RadioGroupV = "RadioGroupV",
  DatePicker = "DatePicker",
  DateTimePicker = "DateTimePicker",
  TimePicker = "TimePicker",
}

export enum EventStatus {
  ComingSoon = "ComingSoon",
  InProgress = "InProgress",
  SignUpClosed = "SignUpClosed",
  Finished = "Finished",
  Canceled = "Canceled",
}

const formAdapter = createEntityAdapter<Form>({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const formItemAdapter = createEntityAdapter<FormItem>({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = formAdapter.getInitialState({
  fetchFormListStatus: "idle",
  fetchFormListError: null,
  fetchFormStatus: "idle",
  fetchFormError: null,
  postFormStatus: "idle",
  postFormError: null,
  postFormImgStatus: "idle",
  postFormImgError: null,
  updateFormDetailStatus: "idle",
  updateFormDetailError: null,
  formItem: formItemAdapter.getInitialState({
    fetchFormItemListStatus: "idle",
    fetchFormItemListError: null,
    fetchFormItemStatus: "idle",
    fetchFormItemError: null,
    postFormItemStatus: "idle",
    postFormItemError: null,
    postFormItemImgStatus: "idle",
    postFormItemImgError: null,
    updateFormItemDetailStatus: "idle",
    updateFormItemDetailError: null,
  }),
  createData: {
    completeStatus: {
      EventForm: false,
      EventPoster: false,
      EventConfig: false,
      EventPreview: false,
    },
    basicInfo: {
      title: "",
      startDateTime: null,
      endDateTime: null,
      online: false,
      address: "",
      limit: 0,
      description: "",
      content: "",
    },
    posterImage: "",
    selectedQuestions: [],
  },
});

export const fetchFormList = createAsyncThunk(
  "form/fetchFormList",
  async ({ isAuth }: { isAuth: boolean }, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: listForms,
        variables: {
          limit: 10,
        },
        authMode: isAuth ? undefined : "AWS_IAM",
      });
      return result.data.listForms.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchForm = createAsyncThunk(
  "form/fetchForm",
  async (
    { formId, isAuth }: { formId: string; isAuth: boolean },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getForm,
        variables: { id: formId },
        authMode: isAuth ? undefined : "AWS_IAM",
      });
      if (result.data.getForm === null) {
        return { id: formId, description: "not-found" };
      }
      return result.data.getForm;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postForm = createAsyncThunk(
  "form/postForm",
  async (
    { createFormInput }: { createFormInput: CreateFormInput },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createForm, { input: createFormInput }),
      );
      return result.data.createForm;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateFormDetail = createAsyncThunk(
  "form/updateFormDetail",
  async (
    { updateFormInput }: { updateFormInput: UpdateFormInput },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateForm, { input: updateFormInput }),
      );
      return result.data.updateForm;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchFormItemList = createAsyncThunk(
  "form/formItem/fetchFormItemList",
  async (
    { isAuth, filter }: { isAuth: boolean; filter: any },
    { rejectWithValue },
  ) => {
    try {
      const result: any = await API.graphql({
        query: listFormItems,
        // 改成动态的之后 不用再限制条目了
        variables: {
          filter,
        },
        authMode: isAuth ? undefined : "AWS_IAM",
      });
      return result.data.listFormItems.items;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const fetchFormItem = createAsyncThunk(
  "form/formItem/fetchFormItem",
  async (
    { formItemId, isAuth }: { formItemId: string; isAuth: boolean },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql({
        query: getFormItem,
        variables: { id: formItemId },
        authMode: isAuth ? undefined : "AWS_IAM",
      });
      if (result.data.getFormItem === null) {
        return { id: formItemId, description: "not-found" };
      }
      return result.data.getFormItem;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const postFormItem = createAsyncThunk(
  "form/formItem/postFormItem",
  async (
    {
      createFormItemInput,
    }: {
      createFormItemInput: CreateFormItemInput;
    },
    { rejectWithValue },
  ) => {
    console.log(createFormItemInput);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(createFormItem, { input: createFormItemInput }),
      );
      return result.data.createFormItem;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

export const updateFormItemDetail = createAsyncThunk(
  "form/formItem/updateFormItemDetail",
  async (
    {
      updateFormItemInput,
    }: {
      updateFormItemInput: UpdateFormItemInput;
    },
    { rejectWithValue },
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await API.graphql(
        graphqlOperation(updateFormItem, { input: updateFormItemInput }),
      );
      return result.data.updateFormItem;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.errors);
    }
  },
);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setBasicInfo(state, action) {
      state.createData.basicInfo = {
        ...state.createData.basicInfo,
        ...action.payload,
      };
      console.log(state.createData);
      // 检查basicInfo中是否所有字段都不为空
      const complete = Object.keys(state.createData.basicInfo).every(
        (key) =>
          key === "online" ||
          key === "endDateTime" ||
          !!state.createData.basicInfo[key] ||
          state.createData.basicInfo[key] === 0,
      );
      state.createData.completeStatus.EventForm = complete;
    },

    setPosterImage(state, action) {
      state.createData.posterImage = action.payload;
      state.createData.completeStatus.EventPoster =
        !!state.createData.posterImage;
    },

    updateQuestion(state, action) {
      console.log(action.payload);
      // 找到元素所在index
      const index = state.createData.selectedQuestions.findIndex((item) => {
        console.log(item.id, action.payload.id);
        return item.id === action.payload.id;
      });
      console.log(index);
      state.createData.selectedQuestions.splice(index, 1, action.payload);
    },

    addQuestion(state, action) {
      // 有新的被选中的问题塞进数组的时候 首先添加order 默认排在最后一个
      // 选入列表的时候 需要分配一个新的id
      const selected = {
        ...action.payload,
        id: uuid(),
        order: state.createData.selectedQuestions.length + 1,
      };
      state.createData.selectedQuestions.push(selected);
      // 如果questions数组中有内容 说明配置了活动报名表单 该项置为已完成
      state.createData.completeStatus.EventConfig =
        !!state.createData.selectedQuestions.length;
    },

    removeQuestion(state, action) {
      // 删除元素之后 重新赋值order
      const current = state.createData.selectedQuestions.filter(
        (item) => item.id !== action.payload.id,
      );
      current.forEach((item, index) => (item.order = index + 1));
      state.createData.selectedQuestions = current;
      state.createData.completeStatus.EventConfig =
        !!state.createData.selectedQuestions.length;
    },

    reorderQuestion(state, action) {
      const { newOrder, oldOrder } = action.payload;
      const currentItem = state.createData.selectedQuestions[oldOrder];
      // 首先从数组里剔除需要排序的那一项
      const current = state.createData.selectedQuestions.filter(
        (question) => question.id !== currentItem.id,
      );
      // 然后再把他插入到相应的位置
      current.splice(newOrder, 0, currentItem);
      // 最后重新给order
      current.forEach((item, index) => (item.order = index + 1));
      state.createData.selectedQuestions = current;
    },
    removeAllFormItems(state) {
      formItemAdapter.removeAll(state.formItem);
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchFormList (pending, fulfilled, and rejected)
      .addCase(fetchFormList.pending, (state) => {
        state.fetchFormListStatus = "loading";
      })
      .addCase(fetchFormList.fulfilled, (state, action) => {
        state.fetchFormListStatus = "succeed";
        // formAdapter.removeAll(state);
        formAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchFormList.rejected, (state, action) => {
        state.fetchFormListStatus = "failed";
        state.fetchFormListError = action.payload;
      })
      // Cases for status of selectedForm (pending, fulfilled, and rejected)
      .addCase(fetchForm.pending, (state) => {
        state.fetchFormStatus = "loading";
      })
      .addCase(fetchForm.fulfilled, (state, action) => {
        state.fetchFormStatus = "succeed";
        formAdapter.upsertOne(state, action.payload);
        // commentAdapter.upsertMany(
        //   state.comments,
        //   action.payload.comments.items,
        // );
        // console.log(action.payload.comments.items);
        // store.dispatch(insertAllComments(action.payload.comments.items));
      })
      .addCase(fetchForm.rejected, (state, action) => {
        state.fetchFormStatus = "failed";
        state.fetchFormError = action.payload;
      })
      // Cases for status of postForm (pending, fulfilled, and rejected)
      .addCase(postForm.pending, (state) => {
        state.postFormStatus = "loading";
      })
      .addCase(postForm.fulfilled, (state, action) => {
        state.postFormStatus = "succeed";
        // state.forms.unshift(action.payload.data.createForm);
        formAdapter.addOne(state, action.payload);
        // state.postFormStatus = "idle";
      })
      .addCase(postForm.rejected, (state, action) => {
        state.postFormStatus = "failed";
        state.postFormError = action.payload;
      })
      // Cases for status of updateForm (pending, fulfilled, and rejected)
      .addCase(updateFormDetail.pending, (state) => {
        state.updateFormDetailStatus = "loading";
      })
      .addCase(updateFormDetail.fulfilled, (state) => {
        state.updateFormDetailStatus = "succeed";
        // state.forms.unshift(action.payload.data.createForm);
        // formAdapter.upsertOne(state, action.payload);
        // state.updateFormStatus = "idle";
      })
      .addCase(updateFormDetail.rejected, (state, action) => {
        state.updateFormDetailStatus = "failed";
        state.updateFormDetailError = action.payload;
      })
      // Cases for status of fetchFormItemList (pending, fulfilled, and rejected)
      .addCase(fetchFormItemList.pending, (state) => {
        state.formItem.fetchFormItemListStatus = "loading";
      })
      .addCase(fetchFormItemList.fulfilled, (state, action) => {
        state.formItem.fetchFormItemListStatus = "succeed";
        // formItemAdapter.removeAll(state);
        formItemAdapter.upsertMany(state.formItem, action.payload);
      })
      .addCase(fetchFormItemList.rejected, (state, action) => {
        state.formItem.fetchFormItemListStatus = "failed";
        state.formItem.fetchFormItemListError = action.payload;
      })
      // Cases for status of selectedFormItem (pending, fulfilled, and rejected)
      .addCase(fetchFormItem.pending, (state) => {
        state.formItem.fetchFormItemStatus = "loading";
      })
      .addCase(fetchFormItem.fulfilled, (state, action) => {
        state.formItem.fetchFormItemStatus = "succeed";
        formItemAdapter.upsertOne(state.formItem, action.payload);
        // commentAdapter.upsertMany(
        //   state.comments,
        //   action.payload.comments.items,
        // );
        // console.log(action.payload.comments.items);
        // store.dispatch(insertAllComments(action.payload.comments.items));
      })
      .addCase(fetchFormItem.rejected, (state, action) => {
        state.formItem.fetchFormItemStatus = "failed";
        state.formItem.fetchFormItemError = action.payload;
      })
      // Cases for status of postFormItem (pending, fulfilled, and rejected)
      .addCase(postFormItem.pending, (state) => {
        state.formItem.postFormItemStatus = "loading";
      })
      .addCase(postFormItem.fulfilled, (state, action) => {
        state.formItem.postFormItemStatus = "succeed";
        // state.formItems.unshift(action.payload.data.createFormItem);
        formItemAdapter.addOne(state.formItem, action.payload);
        // state.postFormItemStatus = "idle";
      })
      .addCase(postFormItem.rejected, (state, action) => {
        state.formItem.postFormItemStatus = "failed";
        state.formItem.postFormItemError = action.payload;
      })
      // Cases for status of updateFormItem (pending, fulfilled, and rejected)
      .addCase(updateFormItemDetail.pending, (state) => {
        state.formItem.updateFormItemDetailStatus = "loading";
      })
      .addCase(updateFormItemDetail.fulfilled, (state) => {
        state.formItem.updateFormItemDetailStatus = "succeed";
        // state.formItems.unshift(action.payload.data.createFormItem);
        // formItemAdapter.upsertOne(state, action.payload);
        // state.updateFormItemStatus = "idle";
      })
      .addCase(updateFormItemDetail.rejected, (state, action) => {
        state.formItem.updateFormItemDetailStatus = "failed";
        state.formItem.updateFormItemDetailError = action.payload;
      });
  },
});

export const {
  setBasicInfo,
  addQuestion,
  updateQuestion,
  removeQuestion,
  reorderQuestion,
  setPosterImage,
  removeAllFormItems,
} = formSlice.actions;

export const {
  selectAll: selectAllForms,
  selectById: selectFormById,
  selectIds: selectFormIds,
} = formAdapter.getSelectors((state: RootState) => state.form);

export const {
  selectAll: selectAllFormItems,
  selectById: selectFormItemById,
  selectIds: selectFormItemIds,
} = formItemAdapter.getSelectors((state: RootState) => state.form.formItem);

export default formSlice.reducer;
