import styled from 'styled-components';

export const colourStylesCar = {
  control: styles => ({
    ...styles,
    backgroundColor: '#F7F7FB',
    borderRadius: '14px',
    borderColor: 'transparent',
    color: '#121417',
    fontSize: '18px',
    padding: '14px 18px',
    width: '224px',
    height: '48px',
    display: 'flex',
    alignContent: 'center',
  }),
  valueContainer: styles => ({
    ...styles,
    margin: '0px',
    padding: '0px',
  }),
  input: styles => ({
    ...styles,
    margin: '0px',
    padding: '0px',
  }),
  placeholder: styles => ({
    ...styles,
    color: '#121417',
    margin: '0px',
  }),
  dropdownIndicator: styles => ({
    ...styles,
    color: '#121417',
    padding: '0px',
  }),
  menuList: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 0.20)',
    borderRadius: '14px',
  }),
  menu: styles => ({
    ...styles,
    borderRadius: '14px',
  }),
};

export const colourStylesPrice = {
  control: styles => ({
    ...styles,
    backgroundColor: '#F7F7FB',
    borderRadius: '14px',
    borderColor: 'transparent',
    color: '#121417',
    fontSize: '18px',
    padding: '14px 18px',
    width: '125px',
    height: '48px',
    display: 'flex',
    alignContent: 'center',
  }),
  valueContainer: styles => ({
    ...styles,
    margin: '0px',
    padding: '0px',
  }),
  input: styles => ({
    ...styles,
    margin: '0px',
    padding: '0px',
  }),
  placeholder: styles => ({
    ...styles,
    color: '#121417',
    margin: '0px',
  }),
  dropdownIndicator: styles => ({
    ...styles,
    color: '#121417',
    padding: '0px',
  }),
  menuList: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 0.20)',
    borderRadius: '14px',
  }),
  menu: styles => ({
    ...styles,
    borderRadius: '14px',
  }),
};

export const FilterForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 52px;
  margin-bottom: 52px;
`;

export const FilterText = styled.span`
  padding-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  line-height: 1.28;
  font-weight: 500;
`;

export const FilterInputFrom = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  border-color: transparent;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: var(--color-background-input);
  color: var(--color-text-label);
  font-size: 18px;

  &::placeholder {
    color: var(--color-text-first);
  }
`;

export const FilterInputTo = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  border-color: transparent;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  color: var(--color-text-first);
  font-size: 18px;

  &::placeholder {
    color: var(--color-text-first);
  }
`;

export const FilterButton = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  border-radius: 12px;
  background: var(--color-button);
  color: var(--color-button-text);
  border: transparent;
  margin-top: auto;

  &:hover,
  &:focus {
    background: var(--color-button-hover);
  }
`;
