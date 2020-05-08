import _keyBy from 'lodash/keyBy'
import Organization from '../_types/Organization'

export interface OrganizationsData {
  list: Organization[]
  byId: { [key: number]: Organization }
}

export const create = function(
  { includeUsers } = { includeUsers: false },
): OrganizationsData {
  const list: Organization[] = [
    {
      id: 1,
      name: 'ModularCode',
      plan: {
        id: 'silver',
        name: 'Silver',
      },
    },
    {
      id: 2,
      name: 'Cool LLC',
      plan: {
        id: 'gold',
        name: 'Gold',
      },
      // organizationToUsers: organizationsToUsersData.byOrganizationId[2],
    },
    {
      id: 3,
      name: 'Other LLC',
      plan: {
        id: 'trial',
        name: 'Trial',
      },
      // organizationToUsers: organizationsToUsersData.byOrganizationId[3],
    },
  ]

  const byId: { [key: number]: Organization } = _keyBy(list, 'id')

  const organizationsData = {
    list,
    byId,
  }

  return organizationsData
}

export default {
  create,
}
