import React, { useState } from "react";
import { View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Props, ProviderSignUpFormType } from "./type";
import TextField from "../../Input/TextField";
import Button from "../../Button";
import Spacer from "../../layout/Spacer";
import ErrorText from "../ErrorText";
import { dropdownStyles, FlexRow, Label, SmallText } from "./style";
import TextButton from "../../Button/TextButton";
import * as DateFormatter from "../../../utils/dateFormatter";
import TextArea from "../../Input/TextArea";
import { Dropdown } from "react-native-element-dropdown";
import * as AngolaSubdivisions from "../../../utils/angolaSubdivisions";

const ProviderSignUpForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<ProviderSignUpFormType>();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const provinceData = AngolaSubdivisions.getAllProvinces().map((province) => ({
    province,
  }));

  const spaceBetweenInputs = 20;
  return (
    <View>
      {/* FullName */}
      <Controller
        control={control}
        name="fullName"
        render={() => (
          <TextField
            label="Nome Completo"
            onChangeText={(value) => setValue("fullName", value)}
            value={getValues("fullName")}
            hasError={!!errors.fullName}
          />
        )}
      />
      {errors.fullName && (
        <ErrorText text={errors.fullName.message as string} />
      )}
      <Spacer height={spaceBetweenInputs} />
      {/* BirthDate */}
      <Controller
        control={control}
        name="birthDay"
        render={() => (
          <FlexRow>
            <TextButton
              onPress={() => setShowDatePicker(true)}
              text="Data de nascimento"
            />
            <Label>{DateFormatter.formatDate(getValues("birthDay"))}</Label>
            {showDatePicker && (
              <DateTimePicker
                value={getValues("birthDay")}
                mode="date"
                maximumDate={new Date()}
                onChange={(_: any, date?: Date | undefined) => {
                  setValue("birthDay", date || getValues("birthDay"));
                  setShowDatePicker(false);
                }}
              />
            )}
          </FlexRow>
        )}
      />
      {errors.birthDay && (
        <ErrorText text={errors.birthDay.message as string} />
      )}
      <Spacer height={spaceBetweenInputs} />

      {/* Province */}
      <Controller
        control={control}
        name="province"
        render={() => (
          <Dropdown
            style={dropdownStyles.dropdown}
            placeholderStyle={dropdownStyles.placeholderStyle}
            selectedTextStyle={dropdownStyles.selectedTextStyle}
            inputSearchStyle={dropdownStyles.inputSearchStyle}
            containerStyle={dropdownStyles.container}
            data={provinceData}
            valueField="province"
            labelField="province"
            onChange={(value) => setValue("province", value.province)}
            value={getValues("province")}
            search
            searchPlaceholder="Pesquise por uma província..."
            placeholder="Selecione uma província"
          />
        )}
      />
      <Spacer height={spaceBetweenInputs} />

      {/* BI */}
      <Controller
        control={control}
        name="bi"
        render={() => (
          <TextField
            label="BI"
            value={getValues("bi")}
            onChangeText={(value) => setValue("bi", value)}
            hasError={!!errors.bi}
            placeholder="O seu número do BI"
          />
        )}
      />
      {errors.bi && <ErrorText text={errors.bi.message as string} />}
      <Spacer height={spaceBetweenInputs} />

      {/* Email */}
      <Controller
        control={control}
        name="email"
        render={() => (
          <TextField
            label="Email"
            value={getValues("email")}
            onChangeText={(value) => setValue("email", value)}
            hasError={!!errors.email}
            placeholder="exemplo@exemplo.com"
          />
        )}
      />
      {errors.email && <ErrorText text={errors.email.message as string} />}
      <Spacer height={spaceBetweenInputs} />

      {/* Phone Number */}
      <Controller
        control={control}
        name="phoneNumber"
        render={() => (
          <TextField
            label="Número de Telefone"
            keyboardType="phone-pad"
            value={getValues("phoneNumber")}
            onChangeText={(value) => setValue("phoneNumber", value)}
            hasError={!!errors.phoneNumber}
            placeholder="9XX XXX XXX"
          />
        )}
      />
      {errors.phoneNumber && (
        <ErrorText text={errors.phoneNumber.message as string} />
      )}
      <Spacer height={spaceBetweenInputs} />

      {/* IBAN */}
      <Controller
        control={control}
        name="IBAN"
        render={() => (
          <TextField
            label="IBAN"
            value={getValues("IBAN")}
            onChangeText={(value) => setValue("IBAN", value)}
            hasError={!!errors.IBAN}
            placeholder="AO06.XXXX.XXXX.XXXX.XXXX.XXXX.X"
          />
        )}
      />
      {errors.IBAN && <ErrorText text={errors.IBAN.message as string} />}
      <Spacer height={spaceBetweenInputs} />

      {/* Description */}
      <Controller
        control={control}
        name="description"
        render={() => (
          <TextArea
            label="Descrição"
            value={getValues("description")}
            onChangeText={(value) => setValue("description", value)}
            hasError={!!errors.description}
            placeholder="Conte-nos sobre o que faz..."
          />
        )}
      />
      {errors.description && (
        <ErrorText text={errors.description.message as string} />
      )}
      <Spacer height={spaceBetweenInputs} />

      {/* Password */}
      <Controller
        control={control}
        name="password"
        render={() => (
          <TextField
            label="Password"
            value={getValues("password")}
            onChangeText={(value) => setValue("password", value)}
            hasError={!!errors.password}
            secureText
          />
        )}
      />
      {errors.password ? (
        <ErrorText text={errors.password.message as string} />
      ) : (
        <SmallText>A password deve ter pelo menos 7 caracteres</SmallText>
      )}
      <Spacer height={spaceBetweenInputs} />

      {/* Password Confirmation */}
      <Controller
        control={control}
        name="passwordConfirmation"
        render={() => (
          <TextField
            label="Confirmar Password"
            value={getValues("passwordConfirmation")}
            onChangeText={(value) => setValue("passwordConfirmation", value)}
            hasError={!!errors.passwordConfirmation}
            secureText
          />
        )}
      />
      {errors.passwordConfirmation && (
        <ErrorText text={errors.passwordConfirmation.message as string} />
      )}

      <Spacer height={30} />
      <Button
        text="Cadastrar"
        onPress={handleSubmit<ProviderSignUpFormType>(onSubmit, (error) =>
          console.log(error)
        )}
      />
    </View>
  );
};

export default ProviderSignUpForm;
