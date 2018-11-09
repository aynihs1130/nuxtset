/**
 * @file middleware.
 * 遷移時に必ず実行する関数
 */
export default function(context) {
  context.store.commit('setPage', context.route.name)
}
