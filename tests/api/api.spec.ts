import {test, expect} from '@playwright/test';
//import request = require('@playwright/test');





test('Verify user API returns correct user detail', async({request})=>
{
const response=await request.get('https://jsonplaceholder.typicode.com/users/1');

expect(response.status()).toBe(200);

const body= await response.json();

expect(body.id).toBe(1);
expect(body.name).toBe('Leanne Graham');
expect(body).toHaveProperty('email');

}

);

test ('Verify API request structure for invalid Email', async({request})=>
{
    const response=await request.post('https://jsonplaceholder.typicode.com/users', 
        {
            data:{
                name:'Test User',
                email:'invalid email'
            }
        });
        expect(response.status()).toBe(201);
        const body=await response.json();
        expect(body.name).toBe('Test User');
        expect(body.email).toBe('invalid email');
        console.log('status:',response.status());
        console.log('Response:',body);
    
});

test('Verify user API response contains valid address details', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);
  const body=await response.json();
  expect(body.address).toBeDefined();
  expect(body.address.city).toBe('Gwenborough');
  expect(body.address.geo).toHaveProperty('lat');
  expect(body.address.geo).toHaveProperty('lng');
}
);

test('Verify POST API response contains expected fields and data types',async({request})=>
{
    const response=await request.post('https://jsonplaceholder.typicode.com/users',
       {
        data: {
name: 'Sofiya Test',
username: 'qaTester',
email: 'sofiya.test@example.com',
},
}
);

expect(response.status()).toBe(201);
const body=await response.json();
expect(body).toHaveProperty('id');
expect(typeof body.id).toBe('number');
expect(body.name).toBe('Sofiya Test');
expect(body.username).toBe('qaTester');
expect(body.email).toBe('sofiya.test@example.com');

    
}
)
