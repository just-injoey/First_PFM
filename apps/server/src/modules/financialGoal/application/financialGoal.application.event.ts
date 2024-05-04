export namespace FinancialGoalApplicationEvent {
  export namespace FinancialGoalCreated {
    export const key = 'financialGoal.application.financialGoal.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
