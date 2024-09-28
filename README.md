# TaskManagementApp
A web application for simple task management.

## How to run the application
- Backend: open terminal and navigate to directory of TaskManagementApi folder then enter: dotnet run TaskManagementApi.csproj
- frontend: open terminal and navigate to directory of TaskManagementApp folder then enter: npm install . After all node modules been installed
enter: ng serve
- open Chrome, go to url: http://localhost:4500/  (development mode) or http://localhost:6001/  (release mode)

## How to run the tests
- Unit & integration tests: Open terminal and navigate to directory of TaskManagementApp folder then enter: ng test
- E2E tests: Open terminal and navigate to directory of TaskManagementApp folder then enter: ng run TaskManagementApp:cypress-open

## Ports
- Backend: development port 1994 (launchSettings.json)   release port 6001
- Frontend: development port 4500 (angular.json)     release port 6001

## Frameworks
- Backend: .NET 8
- Frontend: Angular 17

## Languages
- Backend: TypeScript
- Frontend: C#

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

