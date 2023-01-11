import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { changingPage } from "../store/slice/changeMode.slice"
import { setCurrentPageGlobal } from "../store/slice/currentPage.slice"

const useChangePage = () => {
  const timeTransition = 0.2
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentPage } = useSelector(state => state)

  const changePage = (to) => {
    if (to !== currentPage) {
      dispatch(setCurrentPageGlobal(to))
      dispatch(changingPage())
      setTimeout(() => { navigate(to) }, timeTransition * 1000)
    }
  }
  return {
    changePage,
    timeTransition,
    dispatch,
    navigate,

  }
}

export default useChangePage