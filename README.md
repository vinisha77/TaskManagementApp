# TaskManagementApp
A web application for simple task management.

## How to fork the repository
1. Go to the repository on GitHub: [TaskManagementApp](https://github.com/IncipientusAB/TaskManagementApp)
2. Click the "Fork" button at the top right of the page.
3. Choose your GitHub account to fork the repository.

## How to run the application
- Backend: Open terminal and navigate to the directory of TaskManagementApi folder then enter: dotnet run TaskManagementApi.csproj
- Frontend: Open terminal and navigate to the directory of TaskManagementApp folder then enter: npm install . After all node modules have been installed enter: ng serve
- Open Chrome and navigate to url: http://localhost:4500/  (development mode) or http://localhost:6001/  (release mode)

## How to run the tests
- Unit & integration tests: Open terminal and navigate to the directory of TaskManagementApp folder then enter: ng test
- E2E tests: Open terminal and navigate to the directory of TaskManagementApp folder then enter: ng run TaskManagementApp:cypress-open

## Ports
- Backend: development port 1994 (launchSettings.json)   release port 6001
- Frontend: development port 4500 (angular.json)     release port 6001

## Frameworks
- Backend: .NET 8
- Frontend: Angular 17

## Languages
- Frontend: TypeScript
- Backend: C#

## Database
- Sqlite

# Instructions for tests
Tests to be implemented have TODO comments added. Try to do as many as possible, but at least 2 tests for each category (unit, integration, E2E).

## Unit tests
Please open calculations.spec.ts and complete the test cases.
### Test File Path: 
.\TaskManagementApp\src\app\Helpers\calculations.spec.ts
### Source File Path: 
.\TaskManagementApp\src\app\Helpers\calculations.ts

## Integration tests
Please open task.service.spec.ts and user.service.spec.ts and complete the test cases.
### Test File Path: 
.\TaskManagementApp\src\app\services\task.service.spec.ts
### Source File Path: 
.\TaskManagementApp\src\app\services\task.service.ts

### Test File Path: 
.\TaskManagementApp\src\app\services\user.service.spec.ts
### Source File Path: 
.\TaskManagementApp\src\app\services\user.service.ts

## E2E tests
Please open spec.cy.ts and complete the test cases.
### Test File Path: 
.\TaskManagementApp\cypress\e2e\spec.cy.ts
### Source File Path: 
.\TaskManagementApp\src\app\

