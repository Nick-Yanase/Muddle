'use client'
import { useAuth } from "../../../hooks/useAuth";
import Layout from "@/components/layout/layout";
import Task from "@/components/task/Task";
import TaskPage from "@/components/task/TaskPage";

export default function TodoList(){
  useAuth();
  return(
    <Layout>
      <TaskPage/>
    </Layout>
  )
}