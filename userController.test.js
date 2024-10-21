import { adduser, getuser } from './Controller/UserController.js';
import usermodel from './Model/UserModel.js';

jest.mock('./Model/UserModel.js'); // Mock the UserModel

describe('User Controller', () => {
    
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                username: 'testuser',
                phonenumber: '1234567890',
            },
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    describe('adduser', () => {
        it('should create a new user and return success message', async () => {
            usermodel.create.mockResolvedValue(req.body); // Mock the create method

            await adduser(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                message: 'user created done',
                user: req.body,
            });
        });

        it('should return an error message if user creation fails', async () => {
            usermodel.create.mockRejectedValue(new Error('Database error')); // Mock an error

            await adduser(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({
                message: 'Error creating user',
                err: expect.any(Error),
            });
        });
    });

    describe('getuser', () => {
        it('should return all users', async () => {
            const mockUsers = [{ username: 'user1', phonenumber: '1111111111' }];
            usermodel.findAll.mockResolvedValue(mockUsers); // Mock the findAll method

            await getuser(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                message: 'Alluser',
                users: mockUsers,
            });
        });

        it('should return an error message if fetching users fails', async () => {
            usermodel.findAll.mockRejectedValue(new Error('Database error')); // Mock an error

            await getuser(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({
                message: 'Error geting user',
                err: expect.any(Error),
            });
        });
    });
});
