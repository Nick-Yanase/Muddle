import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth(){
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
      if(!token){
        router.push("/login")
      }
  },[router])
}