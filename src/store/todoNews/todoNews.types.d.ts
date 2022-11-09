// Types
import { ITodoNews } from "../../types/todoNews";

interface ITodoNewsState {
    list: ITodoNews[];
    entry: object;
    loading: boolean;
    error: boolean;
}