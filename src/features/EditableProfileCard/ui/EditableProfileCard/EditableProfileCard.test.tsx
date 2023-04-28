import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { ComponentRender } from '@/shared/lib/tests';
import { $api } from '@/shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

const profile: Profile = {
  id: '1',
  first: 'Vasya',
  lastname: 'Pupkin',
  age: 18,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'user123',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'user123',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('readonly mode off', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    expect(screen.getByTestId('EditableProfileCardHeader.SaveButton')).toBeInTheDocument();
  });

  test('form data should be canceled', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'test');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'test');

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('test');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('test');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Vasya');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Pupkin');
  });

  test('should be error', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument();
  });

  test('after success validation should be PUT request', async () => {
    const mockPutReq = jest.spyOn($api, 'put');

    ComponentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'test');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
