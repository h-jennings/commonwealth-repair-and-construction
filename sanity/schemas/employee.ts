import { image } from './image';

export const employee = {
  name: 'employee',
  type: 'document',
  title: 'Employee',
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name',
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
    },
    image,
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: 'bio',
      type: 'richText',
      title: 'Bio',
    },
  ],
};
