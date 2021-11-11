import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';
import { Box, Input, InputLabel, TextField, FormControl, } from '@mui/material';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="###-##-####"
            definitions={{ '#': /[1-9]/, }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    );
});

NumberFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs(props) {
    const [values, setValues] = React.useState({
        textmask: '123-45-6789',
        numberformat: '1320',
    });

    return (
        <Box
            sx={{
                '& > :not(style)': {
                    m: 1,
                },
            }}>
            <FormControl variant="standard">
                <InputLabel htmlFor="formatted-text-mask-input">{props.label}</InputLabel>
                <Input
                    value={values.textmask}
                    name="textmask"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                    {...props}
                />
            </FormControl>
        </Box>
    );
};