// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

// import {addBug, bugAdded, selectUnresolvedBugs} from '../bugs';
// import {apiCallBegin} from '../api'
// import configureStore from '../configureStore'

// describe("bugsSlice", () =>{
//     let fakeAxios;
//     let store;

//     beforeEach(() => {
//         fakeAxios = new MockAdapter(axios);
//         store = configureStore();
//     })

//     describe("action creators", ()=> {
//         it("addBug", () => {
//             const bug = {description: 'a'};
//             const result = addBug(bug);
//             const expected = {
//                 type: apiCallBegin.type,
//                 payload: {
//                     url: "addBug",
//                     method: "post",
//                     data: bug,
//                     onSuccess: bugAdded.type,
//                 }
//             }
//             expect(result).toEqual(expected);
//         });
//     });

//     it("should add the bug to the store if it's saved to the server", async () => {
//         //Arrange
//         const bug = {description: 'a'};
//         const savedBug = {...bug, id: 1, resolved: false};
//         fakeAxios.onPost('/addBug').reply(200, savedBug);
        
//         //Act
//         //dispatch(addBug) => store
//         await store.dispatch(addBug(bug));

//         //Assert
//         expect(store.getState().entities.bugs.list).toContainEqual(savedBug);
//     });

//     it("should not add the bug to the store if it's not saved to the server", async () => {
//         //Arrange
//         const bug = {description: 'a'};
//         fakeAxios.onPost('/addBug').reply(500);
        
//         //Act
//         //dispatch(addBug) => store
//         await store.dispatch(addBug(bug));

//         //Assert
//         expect(store.getState().entities.bugs.list).toHaveLength(0);
//     });

//     describe("selector", () => {
//         it("selectUnresolvedBugs", () => {
//             //Arrange

//             //Act
//             const result = selectUnresolvedBugs({
//                 entities: {
//                     bugs: {
//                         list: [
//                             {id: 1, resolved: true},
//                             {id: 2},
//                             {id: 3},
//                         ]
//                     }
//                 }
//             });
            
//             //Assert
//             expect(result).toHaveLength(2);
//         });
//     });
// });

describe("first test", () =>{
    it("should prove our test enviroment work as expected", () => {});
});

