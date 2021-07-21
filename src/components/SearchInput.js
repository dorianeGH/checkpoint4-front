import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
  },
  iconButton: {
    color: "var(--text-primary)",
    padding: ".5em",
  },
}));

export default function SearchInput() {
  const { root, iconButton } = useStyles();
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form
        className={root}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField id='standard' label='search' />
        <IconButton type='submit' className={iconButton} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
}
